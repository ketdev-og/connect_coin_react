import axios from "axios";
import React, { useEffect, useState } from "react";
import Tables from "../../components/Tables/Tables";
import { StyledUsers } from "./StyledUsers";



const columns = [
  { id: "username", label: "User Name", minWidth: 100 },
  { id: "email", label: "email", minWidth: 100 },
  {
    id: "account",
    label: "Account",
    minWidth: 100,
  },
  {
    id: "createdAt",
    label: "Created",
    minWidth: 100,
  },
];



const Users = () => {
  const [userRows, setUserRows] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/v1/auth/users").then((response) => {
      const users = response.data.user;
      setUserRows(users)
      console.log(userRows);
    });
   
  },[]);
  
  return (
    <StyledUsers>
      <p className="my-10 his_head">Users</p>
      <Tables rows={userRows} columns={columns}/>
    </StyledUsers>
  );
};

export default Users;
