import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import History from './helpers/History'

//pages OR components
import logo from './assets/Logo.svg'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Launch from './pages/Launch'
import Capsule from './pages/Capsules'
import Ships from './pages/Ships'
import Events from './pages/Events'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router history={History}>
        <div className='Global-Container'>
          <Navbar src={logo} alt='logo' />
          <Switch>
            <Route path={'/events'} component={Events} />
            <Route path={'/ships'} component={Ships} />
            <Route path={'/capsule'} component={Capsule} />
            <Route path={'/launch'} component={Launch} />
            <Route path={'/'} component={Home} exact />
            <Route component={PageNotFound} />
          </Switch>
          <Footer src={logo} alt={'logo'} />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App
