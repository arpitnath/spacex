import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Logo from './assets/Logo.svg'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import LaunchScreen from './screens/LaunchScreen'

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar logo={Logo} />
        <Switch>
          <Route path='/launch' component={LaunchScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
