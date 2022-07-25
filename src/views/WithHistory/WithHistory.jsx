import React from 'react'
import Tables from '../../components/Tables/Tables'
import { StyledWithHistory } from './StyledWithHistory'

const WithHistory = () => {
  return (
    <StyledWithHistory>
          <p className='my-10 his_head'>Withdrawal History</p>
         <Tables/>
    </StyledWithHistory>
   
  )
}

export default WithHistory