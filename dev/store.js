import { compose, createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducers/reducer'

const history = createHistory()
const middleware = routerMiddleware(history)

let cakes = []

const initialState = {
    cakes
}

const store = createStore(
    reducer, 
    initialState, 
    compose(
        applyMiddleware(middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export { store, history }