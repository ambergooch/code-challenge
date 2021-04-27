export const UPDATE_BUDGET_DATA = 'UPDATE_BUDGET_DATA'
export const UPDATE_UNITS = 'UPDATE_UNITS'
export const ADD_LOAN_DATA = 'ADD_LOAN_DATA'
export const ADD_COLLATERAL_DATA = 'ADD_COLLATERAL_DATA'

type UpdateBudgetData = {type: typeof UPDATE_BUDGET_DATA, payload: object}
type UpdateUnits = {type: typeof UPDATE_UNITS, payload: string}
type AddLoanData = {type: typeof ADD_LOAN_DATA, payload: Array<any>}
type AddCollateralData = {type: typeof ADD_COLLATERAL_DATA, payload: object}

export const updateBudgetData = (units: string, total_cost: any): UpdateBudgetData => ({
  type: 'UPDATE_BUDGET_DATA', 
  payload: {
    units,
    total_cost,
  }
})

export const updateUnits = (units: string): UpdateUnits => ({
  type: 'UPDATE_UNITS', 
  payload: units
})

export const addLoanData = (loanData: Array<any>): AddLoanData => ({
  type: 'ADD_LOAN_DATA', 
  payload: loanData
})

export const addCollateralData = (collateralData: object): AddCollateralData => ({
  type: 'ADD_COLLATERAL_DATA', 
  payload: collateralData
})



