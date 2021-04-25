import { Component } from 'react'

class Loans extends Component {

  state = {
    balances: [
      { title: "foo", id: 1 },
      { title: "bar", id: 2 }
    ]
  }

  render() {
    return (
      <ul>{this.state.balances.map(el => <li key={el.id}>{el.title}</li>)}</ul>
    )
  }
  
}

export default Loans

