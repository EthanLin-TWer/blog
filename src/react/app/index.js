import React from 'react'
import '@babel/polyfill'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { BlogList } from './BlogList'
import { BlogDetail } from './BlogDetail'

export class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/:id" component={BlogDetail} />
        </Switch>
      </BrowserRouter>
    )
  }
}
