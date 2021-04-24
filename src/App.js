import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import History from './components/History'
import Logo from './assets/Logo.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import LaunchScreen from './screens/LaunchScreen'
import CapsuleScreen from './screens/CapsuleScreen'
import ShipsScreen from './screens/ShipsScreen'
import EventScreen from './screens/EventScreen'
import NotFound from './screens/404'

function App() {
  // console.log(History)
  return (
    <Router history={History}>
      <div className='main'>
        <Navbar logo={Logo} />
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/launch' component={LaunchScreen}></Route>
          <Route path='/capsule' component={CapsuleScreen} />
          <Route path='/ships' component={ShipsScreen} />
          <Route path='/events' component={EventScreen} />
          <Route component={NotFound} />
        </Switch>
        <Footer logo={Logo} />
      </div>
    </Router>
  )
}

export default App
