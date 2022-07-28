import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import { StyledDash } from "./StyledDash";
import { Link, Route, Routes } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";
import { FaMoneyBillAlt, FaUserNurse } from "react-icons/fa";

import { HiOutlineCash } from "react-icons/hi";
import { AiOutlineUserAdd } from "react-icons/ai";
import DashHome from "../DashHome/DashHome";
import Profile from "../Profile/Profile";
import DepoHistory from "../DepoHistory/DepoHistory";
import WithHistory from "../WithHistory/WithHistory";
import Witdraw from "../Withdraw/Witdraw";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { Navigate } from "react-router-dom";

const containerVariant = {
  exit: {
    opacity: 0,
    y: "5vh",
    transition: {
      type: "tween",
      delay: 0.1,
    },
  },
  hidden: {
    y: "5vh",
    opacity: 0,
  },

  show: {
    y: 5,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.1,
    },
  },
};

const Dashboard = () => {
  const [showTradeNav, setTradeNav] = useState(false);
  const [isAuth, setSetIsAuth] = useState(true);
  const [user, setUser] = useState({});

  const toggleTradeNav = () => {
    setTradeNav(!showTradeNav);
  };

  const token = localStorage.getItem("user");
  const configuration = {
    method: "get",
    url: "http://localhost:5000/v1/auth/user",
    headers: {
      authorization: `${token}`,
    },
  };

  useEffect(() => {
    if (!token) {
      setSetIsAuth(false);
    } else {
      axios(configuration)
        .then((data) => {
          setUser(data);
          console.log(data);
          setSetIsAuth(true);
        })
        .catch((err) => {
          setSetIsAuth(false);
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, token]);

  return (
    <div>
      {isAuth ? (
        <StyledDash>
          <div className="dash_header">
            <div className="ds_logo">
              <Logo />
            </div>

            <div className="us_dt mt-4">
              <div className="us_name">
                <span>{user.data.first_name}</span>
              </div>
              <div className="welc">
                <span>Welcome to your account</span>
              </div>
              <div
                className="flex flex-col items-center nav_icon"
                onMouseEnter={toggleTradeNav}
                onMouseLeave={toggleTradeNav}
              >
                <FaUserNurse />
                <AnimatePresence>
                  {showTradeNav && (
                    <motion.ul
                      variants={containerVariant}
                      initial="hidden"
                      animate="show"
                      className="sub_nav"
                    >
                      <Link to={"dashboard/profile"}>Profile</Link>
                      <Link to={"/"}>Logout</Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="side_nav h-full mt-4">
            <div className="side_nav_lis py-8 h-full flex flex-col items-center">
              <Link to="/dashboard" className="py-8">
                <span>
                  <MdAccountBalance />
                </span>
                <span>Account</span>
              </Link>
              <Link to="dashboard/deposits">
                <span>
                  <FaMoneyBillAlt />
                </span>
                <span>Deposit</span>
              </Link>
              <Link to="dashboard/withdraw">
                <span>
                  <HiOutlineCash />
                </span>
                <span> Withdrawal</span>
              </Link>
              <Link to="/">
                <span>
                  <AiOutlineUserAdd />
                </span>
                <span> Referrals</span>
              </Link>
            </div>
            <Routes>
              <Route index element={<DashHome />} />
              <Route path="dashboard/profile" element={<Profile />} />
              <Route path="dashboard/deposits" element={<DepoHistory />} />
              <Route path="dashboard/withdrawals" element={<WithHistory />} />
              <Route path="dashboard/withdraw" element={<Witdraw />} />
            </Routes>
          </div>

          <div className="dsh_footer grid grid-cols-3 mt-4`">
            <div className="rsv">
              <p>© 2020 tradecorpmarketing.com All Rights Reserved.</p>
            </div>
            <div className="logo">
              <Logo />
            </div>
            <div className="contact text-right">
              <p>support@cryptojetmarketing.com</p>
              <p>+01536373838939</p>
            </div>
          </div>
        </StyledDash>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
