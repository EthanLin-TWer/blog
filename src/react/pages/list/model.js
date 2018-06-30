import Features from '../features'
import * as service from './service'

export default {
  namespace: Features.BLOG_LIST,
  state: {
    data: '',
  },
  reducers: {
    saveBlogList(
      state,
      {
        payload: { data },
      }
    ) {
      return { ...state, data: data }
    },
  },
  effects: {
    *fetchBlogList(action, { call, put }) {
      const { data } = yield call(service.fetchBlogList)
      yield put({ type: 'saveBlogList', payload: { data } })
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'fetchBlogList' })
    },
  },
}
