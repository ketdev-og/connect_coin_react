import axios from "axios";
import React, { useEffect, useState } from "react";
import Tables from "../../components/Tables/Tables";
import { StyledDepoHistory } from "./StyledDepoHistory";

const columns = [
  { id: "account", label: "Account", minWidth: 100 },
  { id: "amount", label: "Amount", minWidth: 100 },

  {
    id: "createdAt",
    label: "Created",
    minWidth: 100,
  },
];

const DepoHistory = () => {
  const [depositRows, setDepositRows] = useState([]);

 

  useEffect(() => {
    const token = localStorage.getItem("user");
    const configuration = {
      method: "get",
      url: "http://localhost:8660/v1/auth/user/deposit",
      headers: {
        authorization: `${token}`,
      },
    };
    axios(configuration).then((response) => {
      const deposits = response.data.deposits;
      setDepositRows(deposits);
    });
  },[]);
  return (
    <StyledDepoHistory>
      <p className="my-10 his_head">Deopsit History</p>
      <Tables rows={depositRows} columns={columns} />
    </StyledDepoHistory>
  );
};

export default DepoHistory;
