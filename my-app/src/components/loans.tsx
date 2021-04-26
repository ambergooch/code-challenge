import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoansState } from '../reducers/loansReducer'
import { Container, Card, ListGroup } from 'react-bootstrap'


const mapStateToProps = (state: LoansState) => ({
  loans: state.loans
})

type ReduxType = LoansState & typeof mapStateToProps
class Loans extends Component<ReduxType> {
  render() {

    const { loans } = this.props.loans

    return (
      <div style={{ marginLeft: 30}}>
        <h1>Loan Requests</h1>
        <Container fluid className='d-flex justify-content-start'>
          {loans.map((loan: any) => 
            <Card key={loan.id} style={{ width: '18rem', margin: 20 }}>
              <Card.Body>
                <Card.Title className='mb-2 text-muted'>Loan Request</Card.Title>
                <Card.Title>${loan.amount}</Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Requested By {loan.requested_by}</ListGroup.Item>
                <ListGroup.Item>Date {loan.date}</ListGroup.Item>
                <ListGroup.Item>{loan.status}</ListGroup.Item>
              </ListGroup>
            </Card>
          )}        
        </Container> 
      </div>
    )
  } 
}

export default connect(mapStateToProps)(Loans)


