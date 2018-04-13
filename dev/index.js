import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

import fetch from 'cross-fetch'

import App from './components/app'
import Cake from './components/cake'
import CakeForm from './components/cakeForm'

import { store, history } from './store'

fetch('http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes')
  .then(function(response){
    return response.json()
  })
  .then(function(cakes) {  
    store.dispatch({
      type: 'POPULATE_CAKES',
      cakes
    })
  })

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/add-cake" component={CakeForm}/>
        <Route path="/cake/:cakeId" component={Cake}/>
      </div>
    </ConnectedRouter>
  </Provider>
)

render(
  router,
  document.getElementById('root')
)