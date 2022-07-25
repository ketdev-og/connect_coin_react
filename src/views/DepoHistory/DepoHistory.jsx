import React from 'react'
import Tables from '../../components/Tables/Tables'
import { StyledDepoHistory } from './StyledDepoHistory'

const DepoHistory = () => {
  return (
    <StyledDepoHistory>
          <p className='my-10 his_head'>Deopsit History</p>
         <Tables/>
    </StyledDepoHistory>
   
  )
}

export default DepoHistory