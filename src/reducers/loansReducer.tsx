export interface LoansState {
  loans: any,
}

const initialState = {
  loans: [
    {id: 1, amount: 38934, requested_by: 'Julia Lepetit', date: '03/20/2020', status: 'Approved'},
    {id: 2, amount: 72400, requested_by: 'Jacob Andrews', date: '05/13/2020', status: 'Approved'},
    {id: 3, amount: 94000, requested_by: 'Jacob Andrews', date: '10/13/2020', status: 'Denied'},
    {id: 4, amount: 90000, requested_by: 'Jacob Andrews', date: '10/15/2020', status: 'Approved'},
    {id: 5, amount: 57962, requested_by: 'Julia Lepetit', date: '12/25/2020', status: 'Pending'},
  ],
} 

export type Action = { type: 'ADD_LOAN_DATA', payload: any };

const loansReducer = (
  state: LoansState = initialState,
  action: Action
) => {
  if (action.type === 'ADD_LOAN_DATA') {
    return {
      ...state, 
      loans: [...state.loans, action.payload],
    }
  }
  return state
}

export default loansReducer