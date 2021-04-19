import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import commonStyles from './styles/common.module.css'
import HomeScreen from './screens/HomeScreen'
import LaunchScreen from './screens/LaunchScreen'

function App() {
  return (
    <Router>
      <div className={commonStyles.main}>
        <Switch>
          <Route path='/launch' component={LaunchScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
