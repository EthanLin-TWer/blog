// @ts-nocheck
import { createActions } from '../../utils/redux'

export const actions = createActions({
  fetchBlogDetail: (id) => ({ id }),
  saveBlogDetail: (id, data) => ({ id, data }),
  isLoading: (id, isLoading) => ({ id, isLoading }),
})
