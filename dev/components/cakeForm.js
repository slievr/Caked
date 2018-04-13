import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actions'
import { store, history } from './../store'

class CakeForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            comment: '',
            yumFactor: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }
    

    handleSubmit(event) {

        console.log(this.state.name, this.state.comment, this.state.yumFactor)
        this.props.addCake.bind(null, this.state.name, this.state.comment, this.state.yumFactor)

        store.dispatch({
            type: 'ADD_CAKE',
            id: null,
            name: this.state.name, 
            comment: this.state.comment,
            imageUrl: null, 
            yumFactor: this.state.yumFactor
        })
        history.push('/')
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <Link to='/'>Back to cakes</Link>
                <form onSubmit={this.handleSubmit}>
                
                    <label>
                        Cake Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Cake comment:
                        <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange} />
                    </label>
                    <label>
                        Cake Yum Factor:
                        <input type="text" name="yumFactor" value={this.state.yumFactor} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add Cake" />
                </form>
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

export default connect(mapStateToProps,mapDispatchToProps)(CakeForm)