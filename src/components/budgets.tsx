import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BudgetsState } from '../reducers/budgetsReducer'
import { addBudgetData } from '../actions'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

function Budgets() {
  const dispatch = useDispatch()

  const rowData = useSelector<BudgetsState, BudgetsState['budgets']>(
    (state) => state.budgets.budgets
  )
console.log(rowData)
  const currencyFormatter = (currency: any) => {
    var sansDec = currency.toFixed(0);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$ ${formatted}`
  }

  const calculateTotal = (params: any) => {
    return currencyFormatter(params.data.units * params.data.cost_per_unit)
  }

  const onCellValueChanged = (params: any) => {
    console.log(params)
    dispatch(addBudgetData(params.data))
  }

  const columnDefs =  [
    { headerName: 'Item/Task', field: 'item' },
    { headerName: 'Units', field: 'units', editable: true, onCellValueChanged: onCellValueChanged },
    { headerName: 'Cost Per Unit', field: 'cost_per_unit' },
    { headerName: 'Total Cost', field: 'total_cost', valueGetter: calculateTotal },
]

  return (
    <div className='ag-theme-alpine' style={{ height: 300, width: 800, marginLeft: 30 }}>
      <h1>Project Budget</h1>
      <AgGridReact 
        rowData={rowData} 
        columnDefs={columnDefs}
      />
    </div>
  )
}

export default Budgets