import { createReducer } from '../../utils/redux'

import { actions } from './actions'

const initialState = {
  posts: {},
}
export const reducer = createReducer((on) => {
  on(actions.saveBlogDetail, (state, action) => {
    return state.setIn(['posts', action.payload.id], action.payload.data)
  })
}, initialState)
