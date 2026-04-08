import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { injectTokens } from '../design-tokens/theme'

import { AppRoutes } from './router'
import { store } from './redux'
import './global.styl'

injectTokens()

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={AppRoutes} />
  </Provider>
)
