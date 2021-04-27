import React from 'react'
import { useSelector } from 'react-redux'
import { CollateralState } from '../reducers/collateralReducer'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

function Collateral() {

  const rowData = useSelector<CollateralState, CollateralState['collateral']>(
    (state) => state.collateral.collateral
  )

  return (
    <div className='ag-theme-alpine' style={{ height: 260, width: 1150, marginLeft: 30 }}>
      <h1>Collateralized Debt Obligation</h1>
      <AgGridReact rowData={rowData}>
        <AgGridColumn 
          headerName='Year' 
          field='year'
        />
        <AgGridColumn headerName='Sources of Collateral'>
          <AgGridColumn 
            headerName='Hedge Funds' 
            field='hedge_funds'
          />
          <AgGridColumn 
            headerName='Securities Lending' 
            field='securities'
          />
          <AgGridColumn 
            headerName='Total' 
            field='total'
            width={150}
          />
        </AgGridColumn>
        <AgGridColumn 
          headerName='Volume of Pleged Collateral' 
          field='volume'
        />
        <AgGridColumn 
          headerName='Reuse Rate/Velocity' 
          field='velocity'
        />
      </AgGridReact>
    </div>
  )
}

export default Collateral