import React from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { BlogList } from './routes/BlogList'
import { BlogDetail } from './routes/BlogDetail'

export const AppRoutes = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<BlogList />} />
      <Route path="/post/:postId" element={<BlogDetail />} />
    </>
  )
)
