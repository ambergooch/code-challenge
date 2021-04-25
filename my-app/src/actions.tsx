export const ADD_BALANCE = 'ADD_BALANCE'
export const SET_TYPE = 'SET_TYPE'

type AddBalance = {type: typeof ADD_BALANCE, payload: string}
type SetType = {type: typeof SET_TYPE, payload: number}

export const addBalance = (balance: string): AddBalance => ({
  type: 'ADD_BALANCE', 
  payload: balance
})

export const setType = (type: number): SetType => {
  return {type: SET_TYPE, payload: type}
}

