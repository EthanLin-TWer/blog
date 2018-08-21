import React from 'react'
import '@babel/polyfill'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { BlogList } from './BlogList'
import { BlogDetail } from './BlogDetail'

export class App extends React.PureComponent {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route path="/post/:id" component={BlogDetail} />
        </Switch>
      </HashRouter>
    )
  }
}
