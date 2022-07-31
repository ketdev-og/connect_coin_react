import React, { useEffect, useState } from "react";
import { BsArrowBarRight, BsCashStack } from "react-icons/bs";
import { GiCoinflip, GiCoins } from "react-icons/gi";
import { IoCashOutline } from "react-icons/io5";
import { RiArrowRightLine, RiCoinsLine } from "react-icons/ri";
import UserDetails from "../../components/UserDetails/UserDetail";
import { Styledprofile } from "../Profile/Styledprofile";
import { StyledUser } from "./StyledUser";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Colors } from "../../constants/colors";

const User = () => {
  const location = useLocation();
  const id = location.state.id;
  const [userData, setUserData] = useState({});
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5000/v1/auth/userbyid", {
        id: id,
      })
      .then((response) => {
        setUserData(response.data.user);
      });
  }, [id]);

  const deleteUser = (id) => {
    axios
      .post("http://localhost:5000/v1/auth/deleteuser", {
        id: id,
      })
      .then((response) => {
        if (response.data.status === 200) {
          navigation("/dashboard/users");
        }
      });
  };

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
          icon={<GiCoinflip className="dtl_icon_ic" />}
          title="$0.00:"
          detail="BALANCE"
        />
      </div>
      <div className="flex justify-end items-center mt-20">
        <span className="text-gray-300 text-2xl">
          Make deposit to {`${userData.first_name}  ${userData.last_name}`}
        </span>
        <span className="mx-4"
          style={{
            transform: "translateY(2px)",
            padding: "0.6rem 1rem",
            backgroundColor: Colors.primary,
            color: 'white',
            cursor:'pointer'
          }}
        >
          <RiArrowRightLine />
        </span>
      </div>
      <Styledprofile>
        <div className="pro_oth_dtl mb-20">
          <div className="each dark">
            <p>Full Name</p>
            <p
              style={{ textTransform: "capitalize" }}
            >{`${userData.first_name}  ${userData.last_name}`}</p>
          </div>
          <div className="each">
            <p>Username</p>
            <p>{userData.username}</p>
          </div>
          <div className="each dark">
            <p>Email</p>
            <p>{userData.email}</p>
          </div>
          <div className="each">
            <p>Country</p>
            <p>{userData.country}</p>
          </div>
          <div className="each dark">
            <p>State</p>
            <p>{userData.state}</p>
          </div>
          <div className="each">
            <p>Phone No</p>
            <p>{userData.phone}</p>
          </div>
          <div className="each dark">
            <p>Account</p>
            <p>{userData.account}</p>
          </div>
        </div>
        <StyledUser className="flex justify-end">
          <button
            className="del_btn"
            onClick={() => {
              deleteUser(userData.id);
            }}
          >
            Delete Account
          </button>
        </StyledUser>
      </Styledprofile>
    </div>
  );
};

export default User;
