import React from 'react'
import '@babel/polyfill'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { BlogList } from './BlogList'

export class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BlogList} />
        </Switch>
      </BrowserRouter>
    )
  }
}
