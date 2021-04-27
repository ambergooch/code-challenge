export interface BudgetsState {
  budgets: any
}

const initialState = {
  budgets: [
    { item: 'Site Preparation', units: 25, cost_per_unit: 10000, total_cost: 250000 },
    { item: 'Elevators', units: 6, cost_per_unit: 50000, total_cost: 300000 },
    { item: 'Fire Alarm System', units: 1, cost_per_unit: 1200000, total_cost: 1200000 },
    { item: 'Telecom System', units: 2, cost_per_unit: 8000, total_cost: 16000 },
    { item: 'Debris Removal', units: 50, cost_per_unit: 7000, total_cost: 350000 },
  ],
}

export type Action = { type: any, payload: any }

const budgetsReducer = (
  state: BudgetsState = initialState,
  action: Action
) => {
  if (action.type === 'UPDATE_BUDGET_DATA') {
    return {
      ...state, 
      budgets: [
        ...state.budgets, 
      ],
    }
  }

  if (action.type === 'UPDATE_UNITS') {
    return {
      ...state, 
      units: action.payload,
    }
  }
  return state
}

export default budgetsReducer