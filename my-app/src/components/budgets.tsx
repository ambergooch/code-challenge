import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BudgetsState } from '../reducers/budgetsReducer'
import { addBudgetData } from '../actions'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

function Budgets() {
  const dispatch = useDispatch()

  const rowData = useSelector<BudgetsState, BudgetsState['budgets']>(
    (state) => state.budgets.budgets
  )

  
  const currencyFormatter = (currency: any) => {
    console.log(currency)
    var sansDec = currency.toFixed(0);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$ ${formatted}`
  }

  const calculateTotal = (params: any) => {
    return currencyFormatter(params.data.units * params.data.cost_per_unit)
  }

  const onCellValueChanged = () => {
    dispatch(addBudgetData)
  }
  
  const columnDefs =  [
    { headerName: 'Item/Task', field: 'item' },
    { headerName: 'Units', field: 'units', editable: true, cellValueChanged: onCellValueChanged },
    { headerName: 'Cost Per Unit', field: 'cost_per_unit' },
    { headerName: 'Total Cost', valueGetter: calculateTotal },
]
  // function isEditable(params: EditableCallbackParams) => boolean

  return (
    <div className='ag-theme-alpine' style={{ height: 300, width: 800, marginLeft: 30 }}>
      <h1>Project Budget</h1>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}>
        {/* <AgGridColumn 
          headerName='Item/Task' 
          field='item'
        />
        <AgGridColumn 
          headerName='Units' 
          field='units'
          // cellEditor='agSelectCellEditor' 
          // cellEditorParams={languageCellEditorParams}
        />
        <AgGridColumn 
          headerName='Cost Per Unit' 
          field='cost_per_unit'
          // valueFormatter={params => currencyFormatter(params.data.cost_per_unit)}
        /> */}
        {/* <AgGridColumn 
          headerName='Total Cost' 
          field='total_cost'
          // valueFormatter={params => currencyFormatter(params.data.total_cost)}
        /> */}
      </AgGridReact>
    </div>
  )
}

export default Budgets