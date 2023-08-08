import React from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { BlogList } from './BlogList'
import { BlogDetail } from './BlogDetail'

export const AppRoutes = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BlogList />} />
      <Route path="/post/:postId" element={<BlogDetail />} />
    </>
  )
)
