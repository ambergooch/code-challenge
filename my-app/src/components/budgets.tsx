import React from 'react'
import { useSelector } from 'react-redux'
import { BudgetsState } from '../reducers/budgetsReducer'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

function Budget() {

  const rowData = useSelector<BudgetsState, BudgetsState['budgets']>(
    (state) => state.budgets
  )

  const currencyFormatter = (currency: number) => {
    var sansDec = currency.toFixed(0);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$ ${formatted}`
  }

  return (
    <div className='ag-theme-alpine' style={{ height: 300, width: 800 }}>
      <h1>Project Budget</h1>
      <AgGridReact rowData={rowData}>
        <AgGridColumn 
          headerName='Item/Task' 
          field='item'
        />
        <AgGridColumn 
          headerName='Units' 
          field='units'
        />
        <AgGridColumn 
          headerName='Cost Per Unit' 
          field='cost_per_unit'
          valueFormatter={params => currencyFormatter(params.data.cost_per_unit)}
        />
        <AgGridColumn 
          headerName='Total Cost' 
          field='total_cost'
          valueFormatter={params => currencyFormatter(params.data.total_cost)}
        />
      </AgGridReact>
    </div>
  )
}

export default Budget