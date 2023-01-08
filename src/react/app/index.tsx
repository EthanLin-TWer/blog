import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { BlogList } from './BlogList'
import { BlogDetail } from './BlogDetail'

export const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BlogList />} />
      <Route path="/post/:postId" element={<BlogDetail />} />
    </>
  )
)
