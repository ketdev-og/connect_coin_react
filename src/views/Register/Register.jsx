import React from "react";
import Button from "../../components/Button/Button";
import Inputs, { SelectInput } from "../../components/inputs/Inputs";
import Logo from "../../components/Logo/Logo";
import { StyledRegister } from "./StyledRegister";

const Register = () => {
  return (
    <StyledRegister className="w-full bg-white px-60">
      <div className="reg_con rounded my-10 p-8">
        <div className="reg_logo flex flex-col items-center rounded">
          <Logo />
        </div>
        <form action="" className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div class="">
              <Inputs
                placeholder={"John"}
                type={"text"}
                id={"FirstName"}
                name={"FirstName"}
              />
            </div>
            <div class="">
              <Inputs
                type={"text"}
                name={"LastName"}
                id={"LastName"}
                placeholder={"Doe"}
              />
            </div>
          </div>
          <div className="mt-2">
            <div class="">
              <Inputs
                placeholder={"ketem"}
                type={"text"}
                id={"UserName"}
                name={"UserName"}
              />
            </div>
          </div>
          <div className="mt-2">
            <div class="">
              <Inputs
                placeholder={"example@gmail.com"}
                type={"Email"}
                id={"Email"}
                name={"Email"}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <SelectInput name={"Country"} />
            <SelectInput name={"State"} />
            <Inputs
              name={"City"}
              type={"text"}
              id={"City"}
              placeholder={"New York"}
            />
          </div>
          <div className="mt-2">
            <div class="">
              <Inputs
                placeholder={"+10234567"}
                type={"text"}
                id={"Phone Number"}
                name={"Phone Number"}
              />
            </div>
          </div>
          <SelectInput name={"Account"} />
          <div className="mt-4">
            <div class="">
              <Inputs
                placeholder={"********"}
                type={"password"}
                id={"Password"}
                name={"Password"}
              />
            </div>
          </div>
          <div className="mt-2">
            <div class="">
              <Inputs
                placeholder={"********"}
                type={"password"}
                id={"Confrm Password"}
                name={"Confirm Password"}
              />
            </div>
          </div>
          <div className="mt-6">
            <span className="policy">
              <input class="mr-2 leading-tight" type="checkbox" />I
              agree to ConnectionCoin Marketing
              <a
                className="ml-2 inline-block align-baseline font-bold text-sm fg_policy"
                href=""
              >
                Privacy Policy
              </a>
            </span>
          </div>
          <div className="reg_btn flex justify-center mt-7">
              <Button outline={false} text={"Create Account"} styles={"text-center  w-1/2 "}/>
          </div>
          <div className="mt-2 flex justify-center">
            <span className="policy">
             Already have an account?
              <a
                className="ml-2 inline-block align-baseline font-bold text-sm fg_policy"
                href=""
              >
                Login
              </a>
            </span>
          </div>
          <div className="mt-8">
            <p className="cpy">Copyright (c) 2022 ConnecCoin Trade All Rights Reserved</p>
          </div>
        </form>
      </div>
    </StyledRegister>
  );
};

export default Register;
