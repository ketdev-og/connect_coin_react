import React from "react";
import { StyledLogin } from "./StyledLogin";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Inputs from "../../components/inputs/Inputs";

const Login = () => {
  return (
    <StyledLogin className="h-screen w-full flex justify-center items-center">
      <div className="login_con grid grid-cols-2 h-full w-full">
        <div className="bg-white lg_form flex flex-col justify-center items-center">
          <Logo />
          <p className="py-4 font-bold">Welcome Back</p>
          <div class="w-full px-8">
            <form class="px-12 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <Inputs
                  placeholder={"example@gmail.com"}
                  type={"text"}
                  id={"email"}
                  name={"email"}
                />
              </div>
              <div class="mb-6">
                <Inputs
                  placeholder={"*********"}
                  type={"password"}
                  id={"password"}
                  name={"password"}
                />
              </div>
              <div className="flex flex-col items-center justify-between">
                <a
                  className="inline-block align-baseline font-bold text-sm fg_pass"
                  href=""
                >
                  Forgot Password?
                </a>
                <Button
                  type="button"
                  styles={"w-5/6 my-8 py-80 text-center shadow"}
                  text={"Sign In"}
                  outline={false}
                />
                <span className="dnt">Dont have an account  <a
                  className="inline-block align-baseline font-bold text-sm fg_pass"
                  href=""
                >
                  Sign Up
                </a> </span>
              </div>
            </form>
          </div>
        </div>
        <div className="lg_img p-8">
          <div className="lg_img_txt flex items-end flex-col">
            <Logo styles={"logo"} />
            <p className="mt-4">We got Tips and Tools</p>
            <p>To be the the best BTC trader</p>
            <Button
              text={"Start Trade"}
              outline={false}
              styles={"button mt-4"}
            />
          </div>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
