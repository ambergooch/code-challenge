import React from 'react'
import { hot } from 'react-hot-loader'
import { Navbar, Nav } from 'react-bootstrap'
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar fixed='top' bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Budgets</Nav.Link>
              <Nav.Link href="/loans">Loans</Nav.Link>
              <Nav.Link href="/collateral">Collateral</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ marginTop: 80 }}>
          <Routes />
        </div>
      </header>
    </div>
  );
}

export default hot(module)(App);
