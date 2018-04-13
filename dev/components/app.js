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

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App