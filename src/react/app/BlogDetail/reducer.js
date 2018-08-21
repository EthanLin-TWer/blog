import { createReducer } from '../../utils/redux'

import { actions } from './actions'

const initialState = {
  posts: {},
}
export const reducer = createReducer((on) => {
  on(actions.saveBlogDetail, (state, action) => {
    const { id, data } = action.payload
    return {
      posts: {
        [id]: data,
      },
    }
  })
}, initialState)
