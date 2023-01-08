import { combineReducers } from 'redux'

import { reducer as detail } from './BlogDetail/reducer'

export const reducers = combineReducers({
  detail,
})
