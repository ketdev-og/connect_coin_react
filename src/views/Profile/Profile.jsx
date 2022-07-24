import React from "react";
import { FaUser } from "react-icons/fa";
import { Styledprofile } from "./Styledprofile";
import Button from "../../components/Button/Button"

const Profile = () => {
  return (
    <Styledprofile>
      <div className="pro_t_img"></div>
      <div className="pro_ps_dtl px-10 flex">
        <div className="icon">
          <FaUser />
        </div>
        <div className="info flex flex-col justify-end px-10">
          <p>Favour Man</p>
          <p>@username</p>
        </div>
      </div>
      <div className="pro_btn flex justify-end">
            <Button outline={true} text="Edit Profile" styles={"w-1/5 text-center"}/>
      </div>
      <div className="pro_oth_dtl mt-20 px-10">
        <div className="each dark">
          <p>Email</p>
          <p>fhjdkkdi@gmail.com</p>
        </div>
        <div className="each">
          <p>Country</p>
          <p>USA</p>
        </div>
        <div className="each dark">
          <p>State</p>
          <p>New York</p>
        </div>
        <div className="each">
          <p>Phone No</p>
          <p>536374849</p>
        </div>
        <div className="each dark">
          <p>Account</p>
          <p>464748595</p>
        </div>
      </div>
    </Styledprofile>
  );
};

export default Profile;
