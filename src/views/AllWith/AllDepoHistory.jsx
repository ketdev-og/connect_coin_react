import axios from "axios";
import React, { useEffect, useState } from "react";
import Tables from "../../components/Tables/Tables";
import { StyledAllDepoHistory } from "./StyledAllDepoHistory";

const columns = [
  { id: "account", label: "Account", minWidth: 100 },
  { id: "amount", label: "Amount", minWidth: 100 },

  {
    id: "createdAt",
    label: "Created",
    minWidth: 100,
  },
];

const AllDepoHistory = () => {
  const [depositRows, setDepositRows] = useState([]);

  const token = localStorage.getItem("user");

  const configuration = {
    method: "get",
    url: "http://localhost:8660/v1/auth/withdraws",
    headers: {
      authorization: `${token}`,
    },
  };

  useEffect(() => {
    axios(configuration).then((response) => {
      const deposits = response.data.withdraw;
      setDepositRows(deposits);
    });
  }, []);
  return (
    <StyledAllDepoHistory>
      <p className="my-10 his_head">All Withdrawals</p>
      <Tables rows={depositRows} columns={columns} />
    </StyledAllDepoHistory>
  );
};

export default AllDepoHistory;
