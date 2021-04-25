import { combineReducers } from '@reduxjs/toolkit'


import { ADD_BALANCE, addBalance } from './actions'

const initialState = {
  balances: []
}

type Actions = ReturnType<typeof addBalance> 
// | ReturnType<typeof setType>

const budgetsReducer = (state = initialState, action: Actions) => {
  if (action.type === ADD_BALANCE) {
    return {...state, 
      ...{ balances: action.payload }
    }
  }
  return state
}

// const loansReducer = (loan = null, action: Actions) => {
//   if (action.type === 'ADD_BALANCE') {
//     return action.payload
//   }

//   return loansReducer
// }

export default budgetsReducer

// export default combineReducers({
//   budgets: budgetsReducer,
//   // loans: loansReducer,
// })
