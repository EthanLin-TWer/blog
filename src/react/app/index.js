import React from 'react'
import '@babel/polyfill'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { store } from './redux'
import { BlogList } from './BlogList'
import { BlogDetail } from './BlogDetail'

export class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/post/:id" component={BlogDetail} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}
