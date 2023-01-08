import { takeEvery, call, put } from 'redux-saga/effects'

import { axios } from '../../utils/axios'

import { actions } from './actions'

// @ts-ignore
function* fetchBlogDetail({ payload: { id } }) {
  try {
    const { data } = yield call(
      axios.get,
      `https://cdn.jsdelivr.net/gh/linesh-simplicity/blog@master/_posts/${id}.md`
    )
    // @ts-ignore
    yield put(actions.saveBlogDetail(id, data))
  } catch (error) {}
}

export function* saga() {
  // @ts-ignore
  yield takeEvery(actions.fetchBlogDetail, fetchBlogDetail)
}
