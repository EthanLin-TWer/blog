import { all } from 'redux-saga/effects'

import { saga as detail } from './BlogDetail/saga'

export function* sagas() {
  yield all([detail()])
}
