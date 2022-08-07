import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tables from '../../components/Tables/Tables'
import { StyledWithHistory } from './StyledWithHistory'


const columns = [
  { id: "account", label: "Account", minWidth: 100 },
  { id: "amount", label: "Amount", minWidth: 100 },

  {
    id: "createdAt",
    label: "Created",
    minWidth: 100,
  },
];
const WithHistory = () => {
  const [withRows, setWithRows] = useState([]);

  const token = localStorage.getItem("user");

  const configuration = {
    method: "get",
    url: "http://localhost:8660/v1/auth/user/withdraw",
    headers: {
      authorization: `${token}`,
    },
  };

  useEffect(() => {
    axios(configuration).then((response) => {
      const {userWithdraws} = response.data;
      console.log(userWithdraws);
      setWithRows(userWithdraws);
    });
  },[]);

  return (
    <StyledWithHistory>
          <p className='my-10 his_head'>Withdrawal History</p>
         <Tables rows={withRows} columns={columns}/>
    </StyledWithHistory>
   
  )
}

export default WithHistory