// @ts-nocheck
import Immutable from 'seamless-immutable'

import { createReducer } from '../../utils/redux'

import { actions } from './actions'

const initialState = Immutable.from({
  posts: {},
  loading: {},
})

export const reducer = createReducer((on) => {
  on(actions.saveBlogDetail, (state, action) =>
    state.setIn(['posts', action.payload.id], action.payload.data)
  )

  on(actions.isLoading, (state, action) =>
    state.setIn(['loading', action.payload.id], action.payload.isLoading)
  )
}, initialState)
