import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [userRows, setUserRows] = useState([]);
  
  
  useEffect(() => {
    axios.get("http://localhost:8660/v1/auth/users").then((response) => {
      const users = response.data.user;
      setUserRows(users)
    });
   
  },[]);

  return (
    <StyledUsers>
      <p className="my-10 his_head">Users</p>
      <Tables rows={userRows} columns={columns} link={true}/>
    </StyledUsers>
  );
};

export default Users;
