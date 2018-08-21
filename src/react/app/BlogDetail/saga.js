import { takeEvery } from 'redux-saga/effects'

import { actions } from './actions'

function* fetchBlogDetail() {}

export function* saga() {
  yield takeEvery(actions.fetchBlogDetail, fetchBlogDetail)
}
