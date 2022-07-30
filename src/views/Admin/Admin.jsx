import axios from "axios";
import React, { useEffect, useState } from "react";
import BasicCard from "../../components/Card/Card";
import { StyledAdmin } from "./StyledAdmin";

const Admin = () => {
  const [counts, setCounts] = useState({})
  
  useEffect(() => {
    axios.get("http://localhost:5000/v1/auth/counts").then((response) => {
      console.log(response.data.counts);
      setCounts(response.data.counts)
    });
  },[]);
  return (
    <StyledAdmin>
      <div className="grid grid-cols-3 gap-6">
        <BasicCard title={"USERS"} amount={counts.userCount} to={"/dashboard/users"} />
        <BasicCard
          title={"WITHDRAWALS"}
          amount={"20"}
          to={"/dashboard/withdrawals"}
        />
        <BasicCard
          title={"DEPOSITS"}
          amount={"20"}
          to={"/dashboard/deposits"}
        />
      </div>
    </StyledAdmin>
  );
};

export default Admin;
