import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
 } from 'react-router-dom'
import Budget from './Budgets'
import Collateral from './Collateral'
import Loans from './Loans'

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Budget />
        </Route> 
        <Route exact path='/budgets'>
          <Budget />
        </Route> 
        <Route exact path='/loans'>
          <Loans />
        </Route> 
        <Route exact path='/collateral'>
          <Collateral />
        </Route> 
      </Switch>
    </Router>
  )
}