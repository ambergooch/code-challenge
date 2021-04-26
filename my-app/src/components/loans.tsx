import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoansState } from '../reducers/loansReducer'

const mapStateToProps = (state: LoansState) => ({
  loans: state.loans
})

type ReduxType = LoansState & typeof mapStateToProps
class Loans extends Component<ReduxType> {
  render() {
    const { loans } = this.props.loans
    return (
      <ul>
        {loans.map((loan: any) => 
          <li key={loan.amount}>{loan.date}</li>
        )}
      </ul>
      
    )
  } 
}


export default connect(mapStateToProps)(Loans)

