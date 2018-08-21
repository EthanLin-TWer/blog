import { takeEvery, call, put } from 'redux-saga/effects'

import { axios } from '../../utils/axios'

import { actions } from './actions'

function* fetchBlogDetail({ payload: { id } }) {
  try {
    const { data } = yield call(
      axios.get,
      `https://raw.githubusercontent.com/linesh-simplicity/blog/master/_posts/${id}.md`
    )
    yield put(actions.saveBlogDetail(id, data))
  } catch (error) {}
}

export function* saga() {
  yield takeEvery(actions.fetchBlogDetail, fetchBlogDetail)
}
