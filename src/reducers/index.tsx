import { combineReducers } from 'redux'
import budgetsReducer from './budgetsReducer'
import collateralReducer from './collateralReducer'
import loansReducer from './loansReducer'

export default combineReducers({
  budgets: budgetsReducer,
  collateral: collateralReducer,
  loans: loansReducer
})