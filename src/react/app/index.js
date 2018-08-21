import React from 'react'
import '@babel/polyfill'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { BlogList } from './BlogList'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BlogList} />
    </Switch>
  </BrowserRouter>
)

export default App
