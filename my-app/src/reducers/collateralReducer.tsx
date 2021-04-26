export interface CollateralState {
  collateral: any
}

const initialState = {
  collateral: [
    { year: 2016, hedge_funds: 2.1, securities: 1.2, total: 3.3, volume: 6.1, velocity: 1.8 },
    { year: 2017, hedge_funds: 2.2, securities: 1.5, total: 3.3, volume: 7.5, velocity: 2.0 },
    { year: 2018, hedge_funds: 2.1, securities: 1.6, total: 3.7, volume: 8.1, velocity: 2.2 },
    { year: 2019, hedge_funds: 2.4, securities: 1.5, total: 3.9, volume: 8.5, velocity: 2.2 },
  ],
}

export type Action = { type: 'ADD_COLLATERAL_DATA', payload: any }

const collateralReducer = (
  state: CollateralState = initialState,
  action: Action
) => {
  if (action.type === 'ADD_COLLATERAL_DATA') {
    return {
      ...state, 
      collateral: [...state.collateral, action.payload],
    }
  }
  return state
}

export default collateralReducer