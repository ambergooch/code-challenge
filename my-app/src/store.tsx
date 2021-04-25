import { createStore, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import budgetsReducer from './reducers/budgetsReducer'
import loansReducer from './reducers/loansReducer'

const store = createStore(
  budgetsReducer
    // collateral: collateralReducer,
    // loans: loansReducer,
)
// const store = configureStore({
//   reducer: {
//     budgets: budgetsReducer,
//     // collateral: collateralReducer,
//     // loans: loansReducer,
//   }
// })

export type RootState = ReturnType<typeof store.getState>
export default store

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch()