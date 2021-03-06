import { combineReducers } from 'redux'
import { routerReducer, push } from 'react-router-redux'

import cakes from './cakes'

const reducer = combineReducers({cakes, routing: routerReducer})

export default reducer