import React from "react";
import { BsCashStack } from "react-icons/bs";
import { GiCoins } from "react-icons/gi";
import { IoCashOutline } from "react-icons/io5";
import { RiCoinsLine } from "react-icons/ri";
import UserDetails from "../../components/UserDetails/UserDetail";
import { Styledprofile } from "../Profile/Styledprofile";
import { StyledUser } from "./StyledUser";


const User = () => {
  return (
    <div>
      <div className="user_dtl grid grid-cols-2 gap-6 py-6">
        <UserDetails
          icon={<RiCoinsLine className="dtl_icon_ic" />}
          title="$0.00:"
          detail="LAST DEPOSIT"
        />
        <UserDetails
          icon={<GiCoins className="dtl_icon_ic" />}
          title="$0.00:"
          detail="TOTAL DEPOSIT"
        />
        <UserDetails
          icon={<IoCashOutline className="dtl_icon_ic" />}
          title="$0.00:"
          detail="TOTAL WITHDRAWAL"
        />
        <UserDetails
          icon={<BsCashStack className="dtl_icon_ic" />}
          title="$0.00:"
          detail="LAST WITHDRAWAL"
        />

        <UserDetails
          icon={<BsCashStack className="dtl_icon_ic" />}
          title="$0.00:"
          detail="BALANCE"
        />
      </div>
      <Styledprofile>
        <div className="pro_oth_dtl my-20">
        <div className="each dark">
            <p>Full Name</p>
            <p>email</p>
          </div>
          <div className="each">
            <p>Username</p>
            <p>email</p>
          </div>
          <div className="each dark">
            <p>Email</p>
            <p>email</p>
          </div>
          <div className="each">
            <p>Country</p>
            <p>country</p>
          </div>
          <div className="each dark">
            <p>State</p>
            <p>state</p>
          </div>
          <div className="each">
            <p>Phone No</p>
            <p>phone</p>
          </div>
          <div className="each dark">
            <p>Account</p>
            <p>account</p>
          </div>
        </div>
        <StyledUser>
            <button className="del_btn">Delete Account</button>
        </StyledUser>
      </Styledprofile>
    </div>
  );
};

export default User;
