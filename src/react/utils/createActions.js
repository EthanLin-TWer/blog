import { createAction } from 'redux-actions'

export const createActions = (actions) => {
  const objProxy = {}

  Object.keys(actions)
    .filter((action) => typeof actions[action] === 'function')
    .forEach((action) => {
      objProxy[action] = createAction(action, actions[action].bind(objProxy))
      objProxy[action].toString = () => action
    })

  return objProxy
}
