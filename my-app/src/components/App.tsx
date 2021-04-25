import React from 'react'
import { hot } from 'react-hot-loader'
// import './App.css'
import Budget from './budgets'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <Budget />
      </header>
    </div>
  );
}

export default hot(module)(App);
