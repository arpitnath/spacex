import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import History from './helpers/History'

//pages OR components
import logo from './assets/Logo.svg'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Launch from './pages/Launch'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router history={History}>
        <div className='Global-Container'>
          <Navbar src={logo} alt='logo' />
          <Switch>
            <Route path={'/launch'} component={Launch} />
            <Route path={'/'} component={Home} exact />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
