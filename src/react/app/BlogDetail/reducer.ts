// @ts-nocheck
import Immutable from 'seamless-immutable'

import { createReducer } from '../../utils/redux'

import { actions } from './actions'

const initialState = Immutable.from({
  posts: {},
})

export const reducer = createReducer((on) => {
  on(actions.saveBlogDetail, (state, action) =>
    state.setIn(['posts', action.payload.id], action.payload.data)
  )
}, initialState)
