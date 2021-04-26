export const ADD_BUDGET_DATA = 'ADD_BUDGET_DATA'
export const ADD_LOAN_DATA = 'ADD_LOAN_DATA'
export const ADD_COLLATERAL_DATA = 'ADD_LOAN_DATA'

type AddBudgetData = {type: typeof ADD_BUDGET_DATA, payload: string}
type AddLoanData = {type: typeof ADD_LOAN_DATA, payload: string}
type AddCollateralData = {type: typeof ADD_COLLATERAL_DATA, payload: string}

export const addBudgetData = (budgetData: string): AddBudgetData => ({
  type: 'ADD_BUDGET_DATA', 
  payload: budgetData
})

export const addLoanData = (loanData: string): AddLoanData => ({
  type: 'ADD_LOAN_DATA', 
  payload: loanData
})

export const addCollateralData = (collateralData: string): AddCollateralData => ({
  type: 'ADD_COLLATERAL_DATA', 
  payload: collateralData
})



