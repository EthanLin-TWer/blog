import Immutable from 'seamless-immutable'

import Features from '../features'

import actions from './actions'
import * as service from './service'

export default {
  namespace: Features.BLOG_LIST,
  state: Immutable.from({
    data: '',
  }),
  reducers: {
    saveBlogList(state, action) {
      return state.merge({
        data: action.payload.data,
      })
    },
  },
  effects: {
    *fetchBlogList(action, { call, put }) {
      const { data } = yield call(service.fetchBlogList)
      yield put(actions.saveBlogList(data))
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch(actions.fetchBlogList())
    },
  },
}
