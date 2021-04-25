export interface LoansState {
  loans: Array<any>
}

const initialState = {
  loans: [
    {amount: 38934, date: '09/20/2020'}
  ],
};

export type Action = { type: 'ADD_LOAN_DATA', payload: object };

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