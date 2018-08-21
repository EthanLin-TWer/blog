import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as detail } from './BlogDetail/reducer'

const initialState = {}
const middlewares = []
export const reducers = combineReducers({
  detail,
})

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
)
