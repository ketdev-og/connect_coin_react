import React from "react";
import { StyledUserDetails } from "./StyledUserDetails";

const UserDetail = ({icon,title,detail}) => {
  return (
    <StyledUserDetails className="grid grid-cols-2">
      <div className="dtl_icon flex justify-center items-center">
        {icon}
      </div>
      <div className="dtl_dt">
        <p>{title}</p>
        <p>{detail}</p>
      </div>
    </StyledUserDetails>
  );
};

export default UserDetail;
