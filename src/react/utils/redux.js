import { createAction, handleActions } from 'redux-actions'

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

export const createReducer = (func, initialState) => {
  const handlersObj = {}

  const on = (actionCreator, handler, errorHandler) => {
    const actionType = actionCreator.toString()
    handlersObj[actionType] = {
      next: handler,
      throw: errorHandler,
    }
  }

  func(on)

  return handleActions(handlersObj, initialState)
}
