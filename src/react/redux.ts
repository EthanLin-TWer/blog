import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducers = (state = {}) => state
const store = createStore(reducers, {}, composeWithDevTools())

export { store }
