import React from "react";
import { StyledEvent } from "./StyledEvent";
import EventImg from "../../assets/img/detailImage.svg";
import Button from '../Button/Button';

const Event = () => {
  return (
    <StyledEvent className="grid grid-cols-2 px-24 py-2">
      <div className="event_img flex justify-center items-center">
        <div className="event_img_bg">
          <div className="event_img_img">
            <img src={EventImg} alt="" />
          </div>
        </div>
      </div>
      <div className="event_details flex flex-col justify-center items-center p-8">
        <div>
        Select your preferred offer and trade directly
        with a counterparty rather than using an automated engine to execute
        your transactions. Have freedom to pick the best
        rate and payment method for your needs and with lower costs. You can
        also better safeguard your privacy because you're dealing directly with
        a counterparty.
        </div>
       <div className="my-8 w-1/2">
        <Button outline={false} styles={'text-center'} text={'Start Trade'}/>
       </div>
      </div>
    </StyledEvent>
  );
};

export default Event;
