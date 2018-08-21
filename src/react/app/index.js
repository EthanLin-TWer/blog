import React from 'react'
import '@babel/polyfill'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { BlogList } from './BlogList'
import { NotFound } from './NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogList} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
