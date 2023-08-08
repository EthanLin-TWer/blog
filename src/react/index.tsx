import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { AppRoutes } from './app/router'
import { store } from './app/redux'
import './global.styl'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={AppRoutes} />
  </Provider>
)
