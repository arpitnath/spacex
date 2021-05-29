import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import History from './utils/History'

//pages OR components
import logo from './assets/Logo.svg'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Launch from './pages/Launch'
import Navbar from './components/Navbar'

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
        <div className='Container'>
          <Navbar src={logo} alt='logo' />
          <Switch>
            <Route path={'/launch'} component={Launch} />
            <Route path={'/'} component={Home} exact />
            <Route component={TestErr} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
