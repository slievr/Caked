import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

import Main from './main'
import store from './../store'

function mapStateToProps(state){
    return {
        cakes: state.cakes
    }
}

function mapDispatchToProps(dispach){
    return bindActionCreators(actionCreators,dispach)
}

class App extends React.Component{

    render(){
        return(
            <div>
                <Main {...this.props} />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)