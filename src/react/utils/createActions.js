import { createAction } from 'redux-actions'

const objProxy = {}

export const createActions = (obj) => {
  Object.keys(obj).forEach((e) => {
    if (typeof obj[e] !== 'function') return

    objProxy[e] = createAction(e, obj[e].bind(objProxy))
    objProxy[e].toString = () => e
  })

  return objProxy
}
