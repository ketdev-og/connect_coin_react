import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
import { StyledDash } from "./StyledDash";
import { Link, Route, Routes } from "react-router-dom";
import { MdAccountBalance } from "react-icons/md";
import { FaHamburger, FaMoneyBillAlt, FaUserNurse } from "react-icons/fa";

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
import EditProfile from "../Editprofile/EditProfile";
import Admin from "../Admin/Admin";
import Users from "../Users/Users";
import User from "../User/User";
import Deposite from "../Deposite/Deposite";
import AllDepoHistory from "../AllDepo/AllDepoHistory";
import AllWithHistory from "../AllWith/AllDepoHistory";
import { BsMenuButton } from "react-icons/bs";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import { Colors } from "../../constants/colors";

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

const hamVariant = {
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      type: "tween",
      delay: 0.1,
    },
  },
  hidden: {
    x: "100vw",
    opacity: 0,
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.1,
    },
  },
};



const Dashboard = () => {
  const [showTradeNav, setTradeNav] = useState(false);
  const [showHamNav, setHamNav] = useState(false);
  const [isAuth, setSetIsAuth] = useState(true);
  const [user, setUser] = useState({});

  const toggleTradeNav = () => {
    setTradeNav(!showTradeNav);
  };

  const toggleHamNav = () => {
    setHamNav(!showHamNav);
  };

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
    <div>
      {isAuth ? (
        <StyledDash>
          <div className="dash_header">
            <div className="ds_logo">
              <Logo />
            </div>

            <div className="us_dt mt-4">
              <div className="us_name">
                <span>{user.first_name}</span> <span>{user.last_name}</span>
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
                      <Link to={"/dashboard/profile"}>Profile</Link>
                      <Link to={"/"}>Logout</Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div className="ham flex justify-end">
                <GiHamburgerMenu style={{ fontSize: "1.6rem" }} onClick={toggleHamNav}/>
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
              <Link to="/dashboard/deposits">
                <span>
                  <FaMoneyBillAlt />
                </span>
                <span>Deposit</span>
              </Link>
              <Link to="/dashboard/withdrawals">
                <span>
                  <HiOutlineCash />
                </span>
                <span> Withdrawal</span>
              </Link>
              <Link to="/dashboard/admin">
                <span>
                  <AiOutlineUserAdd />
                </span>
                <span> Admin</span>
              </Link>
            </div>
            <Routes>
              <Route index element={<DashHome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/deposits" element={<DepoHistory />} />
              <Route path="/withdrawals" element={<WithHistory />} />
              <Route path="/withdraw" element={<Witdraw />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user" element={<User />} />
              <Route path="/deposit" element={<Deposite />} />
              <Route path="/admin/deposits" element={<AllDepoHistory />} />
              <Route path="/admin/withdrawals" element={<AllWithHistory />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>

          <div className="dsh_footer grid grid-cols-3">
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
          <AnimatePresence>
            {showHamNav && (
              <motion.div
                variants={hamVariant}
                initial="hidden"
                animate="show"
                className="ham_nav"
              >
               
                  <div className="cancel flex justify-end p-6">
                    <GiCancel
                    onClick={toggleHamNav}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        color: Colors.primary,
                      }}
                    />
                  </div>
                  <ul>
                    <Link to={"/dashboard"}>Account</Link>
                    <Link to={"/dashboard/deposits"}>Deposits</Link>
                    <Link to={"/dashboard/withdrawals"}>Withdrawals</Link>
                    <Link to={"/dashboard/admin"}>Admin</Link>
                    <Link to={"/dashboard/profile"}>Profile</Link>
                    <Link to={"/"}>Logout</Link>
                  </ul>
               
              </motion.div>
            )}
          </AnimatePresence>
        </StyledDash>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default Dashboard;
