import React from "react";
import { StyledAccDetails } from "./StyledAccDetails";
import Button from "../Button/Button"

const AccDetail = ({icon,title,detail,button}) => {
  return (
    <StyledAccDetails className="grid grid-cols-2">
      <div className="dtl_icon flex justify-center items-center">
        {icon}
      </div>
      <div className="dtl_dt">
        <p className="dtl_title">{title}</p>
        <p className="mt-6">{detail}</p>
        <Button outline={false} text={button} styles={'mt-2 text-center btn_sm'}/>
      </div>
    </StyledAccDetails>
  );
};

export default AccDetail;
