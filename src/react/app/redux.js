import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducers } from './reducers'
import { sagas } from './sagas'

const initialState = {}

const sagaMiddleware = createSagaMiddleware()
let middlewares = applyMiddleware(sagaMiddleware)
// if (__DEV__) {
middlewares = composeWithDevTools(middlewares)
// }

const store = createStore(reducers, initialState, middlewares)
// saga needs to be run after middlewares are mounted by createStore
sagaMiddleware.run(sagas)
export { store }
