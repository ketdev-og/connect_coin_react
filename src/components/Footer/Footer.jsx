import React from "react";
import Logo from "../Logo/Logo";
import { StyledBottom, StyledFooter } from "./StyledFooter";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <StyledFooter className="mt-40 px-8 py-8 flex items-center">
        <div className="foot">
          <Logo styles={"px-4"} />
          <div className="ft_links flex flex-row">
            <div className="abt_ft_links px-16">
              <p className="font-bold mb-2">ABOUT US</p>
              <ul>
                <li>
                  <a href="">About ConnectCoins</a>
                </li>
              </ul>
            </div>
            <div className="spt_ft_links px-16">
              <p className="font-bold mb-2">SUPPORT</p>
              <ul>
                <li>
                  <a href="">Support dashboard</a>
                </li>
                <li>
                  <a href="">Guides</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-8 py-8 flex flex-col items-center justify-center bot">
          <p className="my-4">
            © 2012 - 2022 ConnectCoins Oy. All rights reserved.
          </p>
          <div className="my-4">
            <a href="">Terms of Services</a>
            <a href="">Privacy Policy</a>
            <a href="">Acceptable Use Policy</a>
          </div>
          <p className="my-4">Follow us on</p>
          <div className="flex my-2">
            <a href="" className="ft_icons">
              <BsFacebook className="text-3xl " />
            </a>
            <a href="" className="ft_icons">
              <FaTwitterSquare className="text-3xl mx-8" />
            </a>
            <a href="" className="ft_icons">
              <FaInstagramSquare className="text-3xl" />
            </a>
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
