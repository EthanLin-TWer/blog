import { createAction, handleActions } from 'redux-actions'

// @ts-ignore
export const createActions = (actions) => {
  const objProxy = {}

  Object.keys(actions)
    .filter((action) => typeof actions[action] === 'function')
    .forEach((action) => {
      // @ts-ignore
      objProxy[action] = createAction(action, actions[action].bind(objProxy))
      // @ts-ignore
      objProxy[action].toString = () => action
    })

  return objProxy
}

// @ts-ignore
export const createReducer = (func, initialState) => {
  const handlersObj: { [key: string]: any } = {}

  // @ts-ignore
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
