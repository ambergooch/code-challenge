import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BudgetsState } from '../reducers/budgetsReducer'
import { updateUnits, updateBudgetData } from '../actions'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

function Budgets() {
  const dispatch = useDispatch()

  const budgets = useSelector<BudgetsState, BudgetsState['budgets']>(
    (state) => state.budgets.budgets
  )

  const currencyFormatter = (currency: any) => {
    var sansDec = currency.toFixed(0);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$ ${formatted}`
  }

  const calculateTotal = (params: any) => {
    return currencyFormatter(params.data.units * params.data.cost_per_unit)
  }

  const onCellValueChanged = (params: any) => {
    const total_cost = calculateTotal(params)
    // dispatch(updateUnits(params.data.units))
    dispatch(updateBudgetData(params.data.units, total_cost))
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
        rowData={budgets} 
        columnDefs={columnDefs}
      />
    </div>
  )
}

export default Budgets