import Immutable from 'seamless-immutable'

import { actions } from './actions'
import { reducer } from './reducer'

test('should set post data under the id when handling action saveBlogDetail', () => {
  const state = Immutable.from({ posts: {} })
  const id = 'id-1'
  const data = 'whatever-data'
  const expected = {
    posts: {
      'id-1': 'whatever-data',
    },
  }

  const result = reducer(state, actions.saveBlogDetail(id, data))

  expect(result).toEqual(expected)
})
