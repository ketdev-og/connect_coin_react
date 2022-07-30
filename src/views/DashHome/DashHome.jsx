import React from "react";
import {
  FaClock,
  FaRegCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";
import { RiCoinsLine, RiHandCoinFill } from "react-icons/ri";
import { BsCashCoin, BsCashStack } from "react-icons/bs";
import { GiCoins } from "react-icons/gi";
import { IoCashOutline } from "react-icons/io5";
import { GrBitcoin } from "react-icons/gr";
import UserDetails from "../../components/UserDetails/UserDetail";
import AccDetail from "../../components/AccDetails/AccDetail";

const DashHome = () => {
  return (
    <div className="other_sd">
      <div className="chart">
        <coingecko-coin-compare-chart-widget
          coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
          currency="usd"
          locale="en"
        ></coingecko-coin-compare-chart-widget>
      </div>
      <div className="acc_ov my-14">
        <p>Account Overview</p>
        <p className="pt-4">
          only make deposite to the bitcoin wallet address below
        </p>
        <p>tywey6r2783yr89293y7r2ehf98423r2hoi3uer0293uri329</p>
      </div>
      <div className="user_dtl grid grid-cols-3 py-6 gap-6">
        <UserDetails
          icon={<FaUserAlt className="dtl_icon_ic" />}
          title="Your username:"
          detail="KETEMNGOG"
        />
        <UserDetails
          icon={<FaRegCalendarAlt className="dtl_icon_ic" />}
          title="Registration date:"
          detail="2022-07-11 07:38:51"
        />
        <UserDetails
          icon={<FaClock className="dtl_icon_ic" />}
          title="Last Access:"
          detail="0000-00-0000-00"
        />
      </div>
      <div className="user_dtl grid grid-cols-3 gap-6">
        <AccDetail
          icon={<GrBitcoin className="dtl_icon_ic" />}
          title="$0.00"
          detail="ACTIVE DEPOSIT"
          button="MAKE DEPOSIT"
        />
        <AccDetail
          icon={<BsCashCoin className="dtl_icon_ic" />}
          title="$0.00"
          detail="YOUR BALANCE"
          button="WITHDRAW FUNDS"
        />
        <AccDetail
          icon={<RiHandCoinFill className="dtl_icon_ic" />}
          title="$0.00"
          detail="ADDED BONUS"
          button="MY DEPOSIT"
        />
      </div>
      <div className="acc_ov my-14">
        <p>YOUR DEPOSIT/WITHDRAWALS</p>
        <p className="pt-4">
          only make deposite to the bitcoin wallet address below
        </p>
        <p>tywey6r2783yr89293y7r2ehf98423r2hoi3uer0293uri329</p>
      </div>
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
      </div>
    </div>
  );
};

export default DashHome;
