import { takeEvery, call, put } from 'redux-saga/effects'

import { axiosNormal } from '../../utils/axios'

import { actions } from './actions'

// @ts-ignore
function* fetchBlogDetail({ payload: { id } }) {
  try {
    const { data } = yield call(
      axiosNormal.get,
      process.env.BLOG_DETAIL_API.replace('{id}', id)
    )
    // @ts-ignore
    yield put(actions.saveBlogDetail(id, data))
  } catch (error) {}
}

export function* saga() {
  // @ts-ignore
  yield takeEvery(actions.fetchBlogDetail, fetchBlogDetail)
}
