import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Styledprofile } from "./Styledprofile";
import { Link, useLocation} from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const data = location.state?.data;
  useEffect(() => {
    setUser(data)
  }, [data])

  return (
    <Styledprofile>
      <div className="pro_t_img"></div>
      <div className="pro_ps_dtl px-10 flex">
        <div className="icon">
          <FaUser />
        </div>
        <div className="info flex flex-col justify-end px-10">
          <p>
            {user ? user.first_name + " "+ user.last_name : ""}
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
