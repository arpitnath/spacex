import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import History from './utils/History'

//pages OR components
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Launch from './pages/Launch'

const TestErr = () => {
  return (
    <>
      <h2>Error Page</h2>
    </>
  )
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router history={History}>
        <Switch>
          <Route path={'/launch'} component={Launch} />
          <Route path={'/'} component={Home} exact />
          <Route component={TestErr} />
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}

export default App
