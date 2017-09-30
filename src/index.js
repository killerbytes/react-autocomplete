import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import "normalize.css"
import "./styles/main.css"

import store from './store'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))

registerServiceWorker()
