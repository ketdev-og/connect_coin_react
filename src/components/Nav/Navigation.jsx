import React, { useState } from "react";
import { StyledNavigation } from "./StyledNavigation";
import Button from "../Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../Logo/Logo";

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

const Navigation = () => {
  const [showTradeNav, setTradeNav] = useState(false);
  const [showSupportNav, setSupportNav] = useState(false);

  const toggleTradeNav = () => {
    setTradeNav(!showTradeNav);
  };

  const toggleSupportNav = () => {
    setSupportNav(!showSupportNav);
  };
  return (
    <StyledNavigation className="grid grid-cols-3 py-4 px-8">
      <Logo/>
      <div className="links">
        <ul className="main_nav">
          <li
            className="wt_sub_nav"
            onMouseEnter={toggleTradeNav}
            onMouseLeave={toggleTradeNav}
          >
            Trade
            <AnimatePresence>
              {showTradeNav && (
                <motion.ul
                  exit={containerVariant.exit}
                  variants={containerVariant}
                  initial="hidden"
                  animate="show"
                  className="sub_nav"
                >
                  <li>
                    <a href="">Buy</a>
                  </li>
                  <li>
                    <a href=""> Sell</a>
                  </li>
                  <li>
                    <a href="">Gift Cards</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li
            onMouseEnter={toggleSupportNav}
            onMouseLeave={toggleSupportNav}
            className="wt_sub_nav"
          >
            Support
            <AnimatePresence>
              {showSupportNav && (
                <motion.ul
                  variants={containerVariant}
                  initial="hidden"
                  animate="show"
                  className="sub_nav"
                >
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="wt_sub_nav">About Us</li>
        </ul>
      </div>
      <div className="auth">
        <Button outline={true} text={"Sign In"} link={"/login"}/>
        <Button outline={false} text={"Sign Up"} link={"/register"}/>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
