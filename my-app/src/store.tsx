import { createStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import reducer from './reducers'

const store = createStore(reducer)

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