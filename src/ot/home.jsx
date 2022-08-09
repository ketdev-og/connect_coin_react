import React from "react";
import "./external/style.css";
import "./external/slider.css";
import { MarketData } from "react-tradingview-embed";

const OThome = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="head_wrapper">
          <div className="header" id="header">
            <div className="header_background">
              <div className="top_nav1">
                <div className="login1">
                  <section>
                    <a href="external/login.html" id="log1">
                      LOG IN
                    </a>
                  </section>
                </div>

                <div className="login1">
                  <section>
                    <a href="external/signup.hml" id="log1">
                      SIGN UP
                    </a>
                  </section>
                </div>
              </div>

              <div className="top_nav2">
                <div className="logo">
                  <a href="index.html">
                    <img alt="" src={require("./external/logo/logo.png")} />
                  </a>
                </div>
                <div className="navigation">
                  <ul>
                    <li>
                      Get Started
                      <div className="floating_nav1">
                        <div className="float1 float11">
                          <a href="external/plans.html">
                            Our Packages &nbsp;
                            <i
                              className="fa-brands fa-atlassian"
                              style={{ color: "green" }}
                            ></i>
                          </a>
                          <a href="external/faq.html">
                            Faq & Support &nbsp;
                            <i
                              className="fa-solid fa-user-check"
                              style={{ color: "black" }}
                            ></i>
                          </a>
                          <a href="">
                            Live Chats &nbsp;
                            <i
                              className="fa-solid fa-comment"
                              style={{ color: "red" }}
                            ></i>
                          </a>
                          <a href="external/review.html">
                            Client Reviews&nbsp;
                            <i
                              className="fa-solid fa-star"
                              style={{ color: "gold" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </li>

                    <li>
                      Products
                      <div className="floating_nav2">
                        <div className="float1">
                          <a href="external/price.html">
                            Price Charts&nbsp;
                            <i
                              className="fa-brands fa-battle-net"
                              sstyle={{ color: "red" }}
                            ></i>
                          </a>
                          <a href="external/referral.html">
                            Referral System&nbsp;
                            <i
                              className="fa-solid fa-recycle"
                              style={{ color: "green" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </li>

                    <li>
                      Prices
                      <div className="floating_nav3">
                        <div className="float1">
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/btc-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Bitcoin Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/lite-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Litecoin
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/xrp-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;XRP Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/eth-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Ethereum Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/xdc-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;XDC Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/ve-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;VeChain Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/car-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Cardano Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/bat-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;BAT Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/bcash-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Bitcoin Cash Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/hed-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Hedera Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/theta-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Theta Price
                          </a>
                        </div>

                        <div className="float2">
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/bnb-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;BNB Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/doge-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Dogecoin Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/ava-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Avalanche Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/sol-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Solana Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/pol-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Polkadot Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/tron-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;TRON Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/shiba-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;Shiba INU Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/iota-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;IOTA Price
                          </a>
                          <a href="external/price.html">
                            <img
                              alt=""
                              src={require("./external/images/usdd-logo.png")}
                              width="20"
                              height="20"
                            />
                            &nbsp;USDD Price
                          </a>
                          <a href="external/price.html">
                            <i
                              className="fa-solid fa-handshake-simple"
                              style={{ color: "red" }}
                            ></i>
                            &nbsp; Other Coin Prices
                          </a>
                        </div>
                      </div>
                    </li>

                    <li>
                      About
                      <div className="floating_nav4">
                        <div className="float1">
                          <a href="external/about.html">
                            About Us&nbsp;
                            <i
                              className="fa-solid fa-users"
                              style={{ color: "green" }}
                            ></i>
                          </a>
                          <a href="external/contact.html">
                            Contact Us &nbsp;
                            <i
                              className="fa-solid fa-phone"
                              style={{ color: "blue" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </li>

                    <li>
                      Contact
                      <div className="floating_nav5">
                        <div className="float1">
                          <a href="external/about.html">
                            About Us&nbsp;{" "}
                            <i
                              className="fa-solid fa-globe"
                              style={{ color: "#252525" }}
                            ></i>
                          </a>
                          <a href="external/why.html">
                            Why Trust Cryptojet&nbsp;
                            <i
                              className="fa-solid fa-circle-question"
                              style={{ color: "red" }}
                            ></i>
                          </a>
                          <a href="external/teams.html">
                            Our Team &nbsp;{" "}
                            <i
                              className="fa-solid fa-users"
                              style={{ color: "green" }}
                            ></i>
                          </a>
                          <a href="external/contact.html">
                            Contact Us&nbsp;
                            <i
                              className="fa-solid fa-phone"
                              style={{ color: "blue" }}
                            ></i>
                          </a>
                          <a href="external/contact.html">
                            Address&nbsp;
                            <i
                              className="fa-solid fa-location-dot"
                              style={{ color: "red" }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mobile_navigation">
                  <div className="mobile_login">
                    <button id="main_login">GET STARTED</button>
                  </div>
                  <div className="mobile_menu_icon">
                    <section className="drop" id="drop">
                      &equiv;
                    </section>
                    <section className="enter" id="enter">
                      &times;
                    </section>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile_login_nav" id="mobile_login_nav">
              <h2>PLEASE SELECT YOUR ACCOUNT TYPE</h2>
              <hr />
              <a href="external/login.html">Trading</a>
              <hr />
              <a href="external/login.html">Mining</a>
            </div>

            <div className="mobile_menu_nav" id="mobile_menu_nav">
              <div className="mobile_logos">
                <a href="mailto:supoort@cryptojetmarketing.com">
                  <i
                    className="fa-regular fa-envelope"
                    style={{ color: "red" }}
                  ></i>
                </a>

                <a href="https://wa.me/message/YYUBVKFS2DDPC1">
                  <i
                    className="fa-brands fa-whatsapp"
                    style={{ color: "green" }}
                  ></i>
                </a>

                <a href="">
                  <i
                    className="fa-solid fa-comment"
                    style={{ color: "#252525" }}
                  ></i>
                </a>
              </div>

              <div className="getstarted">
                <button id="getstartedkey">
                  <p id="getstartedkey1">Get Started</p>
                </button>
                <div className="getstarted1" id="getstarted1">
                  <button>
                    <a href="external/plans.html">
                      Our Packages &nbsp;
                      <i
                        className="fa-brands fa-atlassian"
                        style={{ color: "green" }}
                      ></i>
                    </a>
                  </button>
                  <button>
                    <a href="external/faq.html">
                      Faq & Support &nbsp;
                      <i
                        className="fa-solid fa-user-check"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                  </button>
                  <button>
                    <a href="external/review.html">
                      Client Reviews&nbsp;
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "green" }}
                      ></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="products">
                <button id="productskey">
                  <p id="productskey1">Products</p>
                </button>
                <div className="products1" id="products1">
                  <button>
                    <a href="external/price.html">
                      <i
                        className="fa-brands fa-battle-net"
                        style={{ color: "#ed" }}
                      ></i>
                      &nbsp;Price Charts
                    </a>
                  </button>
                  <button>
                    <a href="external/referral.html">
                      <i
                        className="fa-solid fa-recycle"
                        style={{ color: "green" }}
                      ></i>
                      &nbsp;Referral System
                    </a>
                  </button>
                </div>
              </div>

              <div className="prices">
                <button id="prices_key">
                  <p id="prices_key1">Prices</p>
                </button>
                <div className="prices1" id="prices1">
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/btc-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Bitcoin Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/xrp-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;XRP Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/lite-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Litecoin
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/eth-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Ethereum Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/xdc-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;XDC Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/ve-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;VeChain Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/car-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Cardano Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/bat-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;BAT Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/bcash-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Bitcoin Cash Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/hed-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Hedera Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/doge-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Dogecoin Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/theta-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Theta Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <img
                        alt=""
                        src={require("./external/images/sol-logo.png")}
                        style={{ height: "10px", width: "10px" }}
                      />
                      &nbsp;&nbsp;Solana Price
                    </a>
                  </button>
                  <button>
                    <a href="external/price.html">
                      <i
                        className="fa-solid fa-handshake-simple"
                        style={{ color: "red" }}
                      ></i>
                      &nbsp; Other Coin Prices
                    </a>
                  </button>
                </div>
              </div>

              <div className="about">
                <button id="aboutkey">
                  <p id="aboutkey1">About</p>
                </button>
                <div className="about1" id="about1">
                  <button>
                    <a href="external/about.html">
                      About Us&nbsp;
                      <i
                        className="fa-solid fa-users"
                        style={{ color: "green" }}
                      ></i>
                    </a>
                  </button>
                  <button>
                    <a href="external/contact.html">
                      Contact Us &nbsp;
                      <i
                        className="fa-solid fa-phone"
                        style={{ color: "blue" }}
                      ></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="contact">
                <button id="contactkey">
                  <p id="contactkey1">Contact</p>
                </button>
                <div className="contact1" id="contact1">
                  <button>
                    <a href="external/about.html">
                      About Us&nbsp;{" "}
                      <i
                        className="fa-solid fa-globe"
                        style={{ color: "#252525" }}
                      ></i>
                    </a>
                  </button>
                  <button>
                    <a href="external/why.html">
                      Why Trust Cryptojet&nbsp;
                      <i
                        className="fa-solid fa-circle-question"
                        style={{ color: "red" }}
                      ></i>
                    </a>
                  </button>
                  <button>
                    {" "}
                    <a href="external/teams.html">
                      Our Team &nbsp;{" "}
                      <i
                        className="fa-solid fa-users"
                        style={{ color: "green" }}
                      ></i>
                    </a>
                  </button>
                  <button>
                    <a href="external/contact.html">
                      Contact Us&nbsp;
                      <i
                        className="fa-solid fa-phone"
                        style={{ color: "blue" }}
                      ></i>
                    </a>
                  </button>
                  <button>
                    <a href="external/contact.html">
                      Address&nbsp;
                      <i
                        className="fa-solid fa-address-card"
                        style={{ color: "red" }}
                      ></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="second_main">
            <div className="second_main_1">
              <h1>
                <span>Cryptojet,</span> The <br /> <span>Revolution</span> In{" "}
                <br /> <span>Virtual</span> Coin
              </h1>
              <p>
                Making The Right Decision Requires Intelligence. We Are An
                Experienced Cooperation That Offers Diverse Options To
                Customers. Our Cooperation Aims At Achieving A Good ROI For Our
                Customers. We Value Your Trust Above Everything Else And Always
                Make Your Satisfaction Our Top Priority.
              </p>
              <section>
                <a href="external/signup.html">GET STARTED</a>
              </section>
            </div>

            <div className="timer__background">
              <p>24 Hour Distribution Timer :</p>
              <div className="flipTimer">
                <div className="hours"></div>
                <div className="minutes"></div>
                <div className="seconds"></div>
              </div>
              <div className="token">
                <section>
                  <a href="external/signup.html">GET STARTED</a>
                </section>
              </div>

              <div className="twenty" style={{ color: "white" }}>
                45%
              </div>
              <div className="hardcap">
                <span>Hardcap</span>
              </div>
              <div className="token">
                <h3 style={{ fontWeight: "lighter" }}>
                  Total Tokens: &nbsp;<span className="price">763.0122</span>{" "}
                </h3>
              </div>

              <div className="token">
                <h3 style={{ fontWeight: "lighter" }}>
                  Tokens In Circulation: &nbsp;
                  <span className="price">513.3011</span>
                </h3>
              </div>

              <div className="token">
                <h3 style={{ fontWeight: "lighter" }}>
                  Token Price:&nbsp; <span className="price">500.00 USD</span>{" "}
                </h3>
              </div>
            </div>
          </div>

          <div className="fixed_nav">
            <div className="live_chat">
              <a href="">
                <img
                  alt=""
                  src={require("./external/images/message-logo.png")}
                  width="60"
                  height="60"
                  style={{ borderRadius: "50%" }}
                />
              </a>
            </div>
          </div>

          <div className="platform">
            <div className="platform_1">
              <h1 className="big">
                <span>Cryptojet Is A Global Multi-Asset Digital Platform</span>{" "}
              </h1>
              <p>
                Cryptojet Is A Global Multi-Asset Digital Platform. We Are In
                The Business Of Achieving A Good ROI For Our Customers.
                Cryptojet Has Made everything Simple For People Around The
                World. We Value Your Trust Above Everything Else And Always Make
                Your Security Our Top Priority. We Are Committed To Providing
                Cutting Edge Solutions To Your Problems. We Facilitate Making
                The Right Direction And We Are In The Business Of Creating
                Solutions That Are Simply Mind Blowing. Join Us Today And
                Embrace Endless Possibilities.
              </p>
            </div>
          </div>

          <div className="content">
            <div className="content_1">
              <h1>150+</h1>
              <h3>Thousand</h3>
            </div>

            <div className="content_2">
              <h1>130+</h1>
              <h3>Cryptocurrencies</h3>
            </div>

            <div className="content_3">
              <h1>40+</h1>
              <h3>U.S Stocks*</h3>
            </div>

            <div className="content_4">
              <h1>100+</h1>
              <h3>Countries</h3>
            </div>
          </div>

          <div className="mobile_content">
            <div className="mobile_content_1">
              <h1>10+</h1>
              <h3>Million</h3>
            </div>
            <div className="mobile_content_3">
              <h1>50</h1>
              <h3>U.S Stocks*</h3>
            </div>

            <div className="mobile_content_4">
              <h1>150</h1>
              <h3>Countries</h3>
            </div>
          </div>

          <div className="slider">
            <div className="slides">
              <input type="radio" name="radio-btn" id="radio1" />
              <input type="radio" name="radio-btn" id="radio2" />

              <div className="slide first">
                <img
                  alt=""
                  src={require("./external/slider/3.jpg")}
                  id="first_image"
                />
              </div>
              <div className="slide">
                <img
                  alt=""
                  src={require("./external/slider/6.jpg")}
                  id="second_image"
                />
              </div>

              <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
              </div>
            </div>

            <div className="navigation-manual">
              <label htmlFor="radio1" className="manual-btn"></label>
              <label htmlFor="radio2" className="manual-btn"></label>
            </div>

            <div className="sidenav" id="sidenav">
              <div>
                <h1>Connect With Us</h1>
                <p>
                  <a href="external/contact.html">
                    Make Today The Day You Take The Next Step Towards Your
                    Goals!!
                  </a>
                </p>
              </div>

              <div className="sidenav_btn">
                <section>
                  <a href="external/contact.html">&rang;&rang;</a>
                </section>
              </div>
            </div>
          </div>

          <div className="live">
            <div className="live_1">
              <h1 className="big">CRYPTOCURRENCY LIVE TABLE </h1>
              <p>
                Preview Of Our Cryptocurrency Live Chart And Other Related
                Information.
              </p>
            </div>
          </div>

          <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright"></div>
            <script
              type="text/javascript"
              src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
              async
            >
              {/* {
                        "width": "100%",
                        "height": "700",
                        "defaultColumn": "overview",
                        "screener_type": "crypto_mkt",
                        "displayCurrency": "USD",
                        "colorTheme": "light",
                        "locale": "en"
                    } */}
            </script>
          </div>

          <div className="sign_main">
            <div className="sign_main_1">
              <h1>
                <i className="fa-brands fa-scribd"></i>ign Up For Cryptojet
                Today
              </h1>
              <p>
                Get Started on one of the best, easiest and secure digital asset
                platform. Every day we welcome new Cryptojet customers, all
                embracing our services and getting started in a way that works
                for them.
              </p>
              <p>
                Cryptojet is a Cooperation that facilitates making the right
                decision in everyone's journey. We are in the business of
                creating solutions that are simply mind blowing. Cryptojet makes
                it easy for you to achieve a good ROI. Click the button below to
                get started
              </p>

              <section>
                <a href="external/signup.html">GET STARTED </a>
              </section>
            </div>
          </div>

          <div className="our_plans" id="our_plans">
            <div className="our_plans_1">
              <h1>
                <i
                  className="fa-brands fa-atlassian"
                  style={{ color: "#F3DF20" }}
                ></i>
                FFORDABLE PACKAGES&nbsp;
              </h1>
              <p>
                Make The Right Decision Today And Get Started With Any Of The
                Various Packages Made Available Based On Your Capability. Our
                Experts Made These Packages Strategically For The Benefit Of Our
                Customers By Ensuring That Risks Are Minimized And Profit Is
                Guaranteed.
              </p>
            </div>
          </div>

          <div className="starter_container">
            <div className="starter_row">
              <div className="starter_col">
                <p>
                  STARTER&nbsp;<i className="fa-solid fa-seedling"></i>
                </p>

                <ul>
                  <li>Daily For 7 Days</li>
                  <li>Min : 500.00 USD</li>
                  <li>Max : 1,000.00 USD</li>
                  <li>Package Duration: 7 Days</li>
                  <li>Daily Ratio: 18.36%</li>
                  <li>Principal Included</li>
                </ul>
                <h3>
                  128.50 <span>%</span>
                </h3>
                <button>
                  <a href="external/signup.html">SIGN UP</a>
                </button>
              </div>

              <div className="starter_col">
                <p>
                  BASIC &nbsp;<i className="fa-solid fa-coins"></i>
                </p>

                <ul>
                  <li>Daily For 7 Days</li>
                  <li>Min : 1,000.00 USD</li>
                  <li>Max : 2,000.00 USD</li>
                  <li>Package Duration: 7 Days</li>
                  <li>Daily Ratio: 18.59%</li>
                  <li>Principal Included</li>
                </ul>
                <h3>
                  131.10 <span>%</span>
                </h3>
                <button>
                  <a href="external/signup.html">SIGN UP</a>
                </button>
              </div>

              <div className="starter_col">
                <p>
                  VIP&nbsp;<i className="fa-solid fa-hand-holding-dollar"></i>
                </p>

                <ul>
                  <li>Daily For 7 Days</li>
                  <li>Min : 2,000.00 USD</li>
                  <li>Max : 4,000.00 USD</li>
                  <li>Package Duration: 7 Days</li>
                  <li>Daily Ratio: 18.89%</li>
                  <li>Principal Included</li>
                </ul>
                <h3>
                  132.00 <span>%</span>
                </h3>
                <button>
                  <a href="external/signup.html">SIGN UP</a>
                </button>
              </div>
              <div className="starter_col">
                <p>
                  MASTER&nbsp;<i className="fa-solid fa-piggy-bank"></i>
                </p>

                <ul>
                  <li>Daily For 7 Days</li>
                  <li>Min : 5,000.00 USD</li>
                  <li>Max : 10,000.00 USD</li>
                  <li>Package Duration: 7 Days</li>
                  <li>Daily Ratio: 20.86%</li>
                  <li>Principal Included</li>
                </ul>
                <h3>
                  135.10 <span>%</span>
                </h3>
                <button>
                  <a href="external/signup.html">SIGN UP</a>
                </button>
              </div>
              <div className="starter_col">
                <p>
                  PREMIUM&nbsp;<i className="fa-solid fa-sack-dollar"></i>
                </p>

                <ul>
                  <li>Daily For 7 Days</li>
                  <li>Min : 10,000.00 USD</li>
                  <li>Max : No Limit</li>
                  <li>Package Duration: 7 Days</li>
                  <li>Daily Ratio: 24.50%</li>
                  <li>Principal Included</li>
                </ul>
                <h3>
                  140.50 <span>%</span>
                </h3>
                <button>
                  <a href="external/signup.html">SIGN UP</a>
                </button>
              </div>
            </div>
          </div>

          <div className="our_partners">
            <i className="fa-brands fa-opera"></i>ur Partners!!
            <div className="partners">
              <div className="partner_1">
                <section>
                  <img
                    alt=""
                    src={require("./external/images/coinbase-logo.jpg")}
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%" }}
                  />
                </section>
              </div>
              <div className="partner_2">
                <section>
                  <img
                    alt=""
                    src={require("./external/images/coinmama-logo.png")}
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%" }}
                  />
                </section>
              </div>
              <div className="partner_3">
                <section>
                  <img
                    alt=""
                    src={require("./external/images/message-logo.png")}
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%" }}
                  />
                </section>
              </div>
              <div className="partner_4">
                <section>
                  <img
                    alt=""
                    src={require("./external/images/blockchain-logo.png")}
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%" }}
                  />
                </section>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="footer_1">
              <h3>Social Media</h3>
              <a href="https://wa.me/message/YYUBVKFS2DDPC1">
                Whatsapp &nbsp;
                <i
                  className="fa fa-whatsapp"
                  aria-hidden="true"
                  style={{ color: "darkgreen" }}
                ></i>
              </a>
              <a href="mailto:supoort@cryptojetmarketing.com">
                Email &nbsp;
                <i
                  className="fa-regular fa-envelope"
                  style={{ color: "red" }}
                ></i>
              </a>
              <a href="">
                Live Chat &nbsp;
                <i
                  className="fa-solid fa-comment"
                  style={{ color: "#252525" }}
                ></i>
              </a>
            </div>

            <div className="footer_2">
              <h3>Resources</h3>
              <a href="external/faq.html">
                FAQ&nbsp;<i className="fa-solid fa-question"></i>
              </a>
              <a href="external/price.html">
                Coin Overview&nbsp;
                <i
                  className="fa-solid fa-hand-holding-dollar"
                  style={{ color: "green" }}
                ></i>
              </a>
            </div>

            <div className="footer_3">
              <h3>Legal</h3>

              <a href="external/privacy.html">
                Privacy Policy&nbsp;
                <i className="fa-solid fa-lock" style={{ color: "green" }}></i>
              </a>
              <a href="external/benefits.html">
                Cryptojet Marketing Benefits&nbsp;
                <i className="fa-solid fa-trophy"></i>
              </a>
            </div>

            <div className="footer_4">
              <h3>Contact Us</h3>
              <a href="external/teams.html">
                Our Team&nbsp;
                <i
                  className="fa-solid fa-people-group"
                  style={{ color: "blue" }}
                ></i>
              </a>
              <a href="external/about.html">
                About Us &nbsp;{" "}
                <i
                  className="fa-solid fa-globe"
                  style={{ color: "#252525" }}
                ></i>
              </a>
            </div>
          </div>

          <div className="movement">
            <div class="tradingview-widget-container">
              <div class="tradingview-widget-container__widget"></div>
              <div class="tradingview-widget-copyright">
                <a
                  href="https://www.tradingview.com/markets/"
                  rel="noopener"
                  target="_blank"
                >
                  <span class="blue-text">Financial Markets</span>
                </a>{" "}
                by TradingView
              </div>
              <script
                type="text/javascript"
                src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
                async
              >
                {JSON.stringify(
                  Object.assign({
                    symbols: [
                      {
                        proName: "FOREXCOM:SPXUSD",
                        title: "S&P 500",
                      },
                      {
                        proName: "FOREXCOM:NSXUSD",
                        title: "US 100",
                      },
                      {
                        proName: "FX_IDC:EURUSD",
                        title: "EUR/USD",
                      },
                      {
                        proName: "BITSTAMP:BTCUSD",
                        title: "Bitcoin",
                      },
                      {
                        proName: "BITSTAMP:ETHUSD",
                        title: "Ethereum",
                      },
                      {
                        description: "TETHER",
                        proName: "BINANCE:BTCUSDT",
                      },
                      {
                        description: "SOLANA",
                        proName: "BINANCE:SOLUSDT",
                      },
                      {
                        description: "OPUS",
                        proName: "BINANCE:OPUSDT",
                      },
                      {
                        description: "XRP",
                        proName: "BINANCE:XRPUSDT",
                      },
                      {
                        description: "BNB",
                        proName: "BINANCE:BNBUSDT",
                      },
                      {
                        description: "SHIBA INU",
                        proName: "BINANCE:SHIBUSDT",
                      },
                      {
                        description: "DOT",
                        proName: "BINANCE:DOTUSDT",
                      },
                      {
                        description: "USDT",
                        proName: "BITSTAMP:BTCUSD",
                      },
                      {
                        description: "USD",
                        proName: "COINBASE:BTCUSD",
                      },
                      {
                        description: "MATIC",
                        proName: "BINANCE:MATICUSDT",
                      },
                      {
                        description: "AVAX",
                        proName: "BINANCE:AVAXUSDT",
                      },
                      {
                        description: "AXS",
                        proName: "BINANCE:AXSUSDT",
                      },
                      {
                        description: "COSMOS",
                        proName: "BINANCE:ATOMUSDT",
                      },
                      {
                        description: "RUNE",
                        proName: "BINANCE:RUNEUSDT",
                      },
                      {
                        description: "LITECOIN",
                        proName: "FTX:LTCUSD",
                      },
                      {
                        description: "CARDANO",
                        proName: "BINANCE:ADAUSDT",
                      },
                      {
                        description: "DOGECOIN",
                        proName: "BINANCE:DOGEUSDT",
                      },
                      {
                        description: "HITCHAIN",
                        proName: "INTOTHEBLOCK:HIT_INVESTORS",
                      },
                      {
                        description: "DAI",
                        proName: "UNISWAP3ETH:DAI",
                      },
                      {
                        description: "HEX",
                        proName: "UNISWAP:HEXUSDC",
                      },
                      {
                        description: "POLKADOT",
                        proName: "KUCOIN:DOTUSDT",
                      },
                      {
                        description: "POLYGON",
                        proName: "KUCOIN:MATICUSDT",
                      },
                      {
                        description: "AVALANCHE",
                        proName: "KUCOIN:AVAXUSDT",
                      },
                      {
                        description: "TRON",
                        proName: "BINANCE:TRXUSDT",
                      },
                      {
                        description: "MONERO",
                        proName: "BINANCE:XMRUSDT",
                      },
                      {
                        description: "BITCOIN CASH",
                        proName: "BINANCE:BCHUSDT",
                      },
                      {
                        description: "FILECOIN",
                        proName: "KUCOIN:FILUSDT",
                      },
                      {
                        description: "IOTA",
                        proName: "BINANCE:IOTAUSDT",
                      },
                      {
                        description: "USDD",
                        proName: "POLONIEX:USDDUSDT",
                      },
                      {
                        description: "VERASITY",
                        proName: "KUCOIN:VRAUSDT",
                      },
                      {
                        description: "ADA",
                        proName: "BINANCE:ADAUSDT",
                      },
                      {
                        description: "APE",
                        proName: "BYBIT:APEUSDT",
                      },
                      {
                        description: "EOS",
                        proName: "BITMEX:BEOS",
                      },
                      {
                        description: "KUCOIN",
                        proName: "KUCOIN:BTCUSDT",
                      },
                      {
                        description: "DASH",
                        proName: "COINBASE:DASHUSD",
                      },
                      {
                        description: "APPLE",
                        proName: "NASDAQ:AAPL",
                      },
                      {
                        description: "SPDR",
                        proName: "AMEX:SPY",
                      },
                      {
                        description: "TESLA",
                        proName: "NASDAQ:TSLA",
                      },
                      {
                        description: "AMAZON",
                        proName: "NASDAQ:AMZN",
                      },
                      {
                        description: "META",
                        proName: "NASDAQ:META",
                      },
                      {
                        description: "NETFLIX",
                        proName: "NASDAQ:NFLX",
                      },
                    ],
                  })
                )}
              </script>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OThome;
