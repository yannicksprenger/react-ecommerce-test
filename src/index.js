import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Login from './components/login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import configureStore from './configureStore'

const store = configureStore()

const Routing = () => {
  return(
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
        </Provider>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
