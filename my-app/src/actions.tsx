export const ADD_BUDGET_DATA = 'ADD_BUDGET_DATA'
export const ADD_LOAN_DATA = 'ADD_LOAN_DATA'
export const SET_TYPE = 'SET_TYPE'

type AddBudgetData = {type: typeof ADD_BUDGET_DATA, payload: string}
type AddLoanData = {type: typeof ADD_LOAN_DATA, payload: string}
type SetType = {type: typeof SET_TYPE, payload: number}

export const addBudgetData = (budgetData: string): AddBudgetData => ({
  type: 'ADD_BUDGET_DATA', 
  payload: budgetData
})

export const addLoanData = (loanData: string): AddLoanData => ({
  type: 'ADD_LOAN_DATA', 
  payload: loanData
})

export const setType = (type: number): SetType => {
  return {type: SET_TYPE, payload: type}
}

