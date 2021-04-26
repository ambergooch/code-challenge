import { combineReducers } from 'redux'
import budgetsReducer from './budgetsReducer'
import loansReducer from './loansReducer'

export default combineReducers({
  budgets: budgetsReducer,
  loans: loansReducer
})