import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import AuthOrApp from './main/authOrApp'
import reducers from './main/Reducers'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, thunk, multi)(createStore)(reducers, devtools)

ReactDOM.render(
        <Provider store={store} >
                <AuthOrApp />
        </Provider>, document.getElementById('app')
        )