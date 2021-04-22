import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import History from './components/History'
import Logo from './assets/Logo.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import LaunchScreen from './screens/LaunchScreen'

function App() {
  // console.log(History)
  return (
    <Router history={History}>
      <div className='main'>
        <Navbar logo={Logo} />
        <Switch>
          <Route path='/launch' component={LaunchScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Switch>
        <Footer logo={Logo} />
      </div>
    </Router>
  )
}

export default App
