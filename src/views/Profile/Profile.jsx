import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Styledprofile } from "./Styledprofile";
import { Link} from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const [isAuth, setSetIsAuth] = useState(true);

  const token = localStorage.getItem("user");
  const configuration = {
    method: "get",
    url: "http://localhost:8660/v1/auth/user",
    headers: {
      authorization: `${token}`,
    },
  };
  useEffect(() => {
    if (!token) {
      setSetIsAuth(false);
    } else {
      axios(configuration)
        .then((response) => {
          setUser(response.data.user);
          setSetIsAuth(true);
        })
        .catch((err) => {
          setSetIsAuth(false);
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    isAuth && <Styledprofile>
      <div className="pro_t_img"></div>
      <div className="pro_ps_dtl px-10 flex">
        <div className="icon">
          <FaUser />
        </div>
        <div className="info flex flex-col justify-end px-10">
          <p>
            {user ? user.first_name + " " + user.last_name : ""}
          </p>
          <p>{user ? user.username : ""}</p>
        </div>
      </div>
      <div className="pro_btn flex justify-end">
        <Link to={"/dashboard/editprofile"} state={{ data: user }}>Edit Profile</Link>
      </div>
      <div className="pro_oth_dtl mt-20 px-10">
        <div className="each dark">
          <p>Email</p>
          <p>{user ? user.email : ""}</p>
        </div>
        <div className="each">
          <p>Country</p>
          <p>{user ? user.country : ""}</p>
        </div>
        <div className="each dark">
          <p>State</p>
          <p>{user ? user.state : ""}</p>
        </div>
        <div className="each">
          <p>Phone No</p>
          <p>{user ? user.phone : ""}</p>
        </div>
        <div className="each dark">
          <p>Account</p>
          <p>{user ? user.account : ""}</p>
        </div>
      </div>
    </Styledprofile>
  
   
  );
};

export default Profile;
