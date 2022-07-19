import React from "react";
import { StyledHead } from "./StyledTop";
import LeadImage from "../../assets/img/leadImage.svg";
import Button from "../Button/Button";
export const Top = () => {
  return (
    <StyledHead className="grid grid-cols-2 mt-16 px-8">
      <div className="head_img">
        <div className="head_img_fm">
          <img src={LeadImage} alt="" />
        </div>
      </div>
      <div className="head_con flex flex-col items-center justify-center ">
        <p className="text-3xl font-semibold">Most trusted and Largest</p>
        <p className="text-5xl my-5 font-bold">Peer-To-Peer</p>
        <p className="text-3xl font-semibold">Bitcoin Trading Platform</p>
        <Button
          styles={"mt-10 w-1/3 text-center font-semibold"}
          outline={true}
          text="Get Started"
        />
      </div>
    </StyledHead>
  );
};

export default Top;
