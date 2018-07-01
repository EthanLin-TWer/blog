import { createAction } from 'redux-actions'

const objProxy = {}

export const createActions = (actions) => {
  Object.keys(actions).forEach((action) => {
    if (typeof actions[action] !== 'function') return

    objProxy[action] = createAction(action, actions[action].bind(objProxy))
    objProxy[action].toString = () => action
  })

  return objProxy
}
