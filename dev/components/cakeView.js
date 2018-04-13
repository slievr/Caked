import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actions'
import { store } from './../store'

class cakeView extends React.Component {   
    
    render() {
        const id = this.props.match.params.cakeId
        store.dispatch({
            type: 'GET_CAKE',
            id
        })

        const i = this.props.cakes.findIndex((cake) => cake.id === id)
        const cake = this.props.cakes[i]
        return (
            <div>
                <Link to='/'> View all Cakes</Link>
                <p>{cake.name}</p>
                <img src={cake.imageUrl} alt={cake.name} />
                <ul>
                    <li>Comment: {cake.comment}</li>
                    <li>Yum Factor: {cake.yumFactor}</li>
                </ul>
                <button onClick={this.props.removeCake.bind(null, cake.id)} className="cake__button cake__button--delete">delete</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cakes: state.cakes
    }
}

function mapDispatchToProps(dispach){
    return bindActionCreators(actionCreators,dispach)
}

export default connect(mapStateToProps,mapDispatchToProps)(cakeView)