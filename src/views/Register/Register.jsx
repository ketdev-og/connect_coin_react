import React, { useState } from "react";
import Inputs, { SelectInput } from "../../components/inputs/Inputs";
import Logo from "../../components/Logo/Logo";
import { StyledRegister } from "./StyledRegister";
import { Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import loadingSvg from "../../assets/img/loading.svg";
import {Link, useNavigate} from "react-router-dom"

const initialValues = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  country: "",
  state: "",
  city: "",
  account: "",
  phone: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object({
  first_name: Yup.string().required("required"),
  last_name: Yup.string().required("required"),
  username: Yup.string().required("required"),
  email: Yup.string().email("invalid email address").required("required"),
  country: Yup.string().required("required"),
  state: Yup.string().required("required"),
  city: Yup.string().required("required"),
  account: Yup.string().required("required"),
  phone: Yup.string().required("required"),
  password: Yup.string()
    .min(8, "at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
      "should conatin a upper and lower case letters and a number"
    )
    .required("required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("required"),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      setLoading(true)
      axios
        .post("http://localhost:8660/v1/auth/register", {
          ...values,
        })
        .then((response) => {
          console.log(response);
          setLoading(false)
          setErrorMessage("")
          localStorage.setItem('user', response.data.token);
          localStorage.setItem("user", response.data.token);
          if (response.status === 200) {
            navigate("/dashboard");
          }
         
        })
        .catch((err) => {
          setLoading(false)
          setErrorMessage(err.response.data.error.message)
        });
    } catch (error) {
      
    }
  };

  return (
    <StyledRegister className="w-full bg-white px-60">
      <div className="reg_con rounded my-10 p-8">
        <div className="reg_logo flex flex-col items-center rounded">
          <Logo />
        </div>
        <div className="err_msg my-8 text-center text-red-600">
          <span>{errorMessage}</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form action="" className="mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <Inputs
                  placeholder={"John"}
                  type={"text"}
                  id={"FirstName"}
                  label={"FirstName"}
                  name={"first_name"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="first_name" />
                </div>
              </div>
              <div className="">
                <Inputs
                  type={"text"}
                  label={"LastName"}
                  id={"LastName"}
                  placeholder={"Doe"}
                  name={"last_name"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="last_name" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="">
                <Inputs
                  placeholder={"ketem"}
                  type={"text"}
                  id={"UserName"}
                  label={"UserName"}
                  name={"username"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="username" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="">
                <Inputs
                  placeholder={"example@gmail.com"}
                  type={"Email"}
                  id={"Email"}
                  label={"Email"}
                  name={"email"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <SelectInput
                  label={"Country"}
                  name={"country"}
                  type={"text"}
                  children={["india", "USA", "Nigeria"]}
                />
                <div className="fr_erm">
                  <ErrorMessage name="country" />
                </div>
              </div>
              <div>
                <SelectInput
                  label={"State"}
                  name={"state"}
                  type={"text"}
                  children={["New York", "Texas"]}
                />
                <div className="fr_erm">
                  <ErrorMessage name="state" />
                </div>
              </div>

              <div>
                <Inputs
                  label={"City"}
                  name={"city"}
                  type={"text"}
                  id={"City"}
                  placeholder={"New York"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="city" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="">
                <Inputs
                  placeholder={"+10234567"}
                  type={"text"}
                  id={"Phone Number"}
                  label={"Phone Number"}
                  name={"phone"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="">
                <Inputs
                  type={"text"}
                  id={"Account"}
                  name={"account"}
                  label={"Account"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="account" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="">
                <Inputs
                  placeholder={"********"}
                  type={"password"}
                  id={"Password"}
                  name={"password"}
                  label={"Password"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="password" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="">
                <Inputs
                  placeholder={"********"}
                  label={"Confirm Password"}
                  type={"password"}
                  id={"Confrm Password"}
                  name={"confirm_password"}
                />
                <div className="fr_erm">
                  <ErrorMessage name="confirm_password" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <span className="policy">
                <input className="mr-2 leading-tight" type="checkbox" />I agree
                to ConnectionCoin Marketing
                <Link
                  className="ml-2 inline-block align-baseline font-bold text-sm fg_policy"
                 to={"/"}
                >
                  Privacy Policy
                </Link>
              </span>
            </div>
            <div className="reg_btn flex justify-center mt-8">
              <button type="submit" className="btn">
                Create Account{" "}
                {loading ? (
                  <img
                    srcSet={loadingSvg}
                    alt=""
                    className="inline"
                  />
                ) : null}
              </button>
            </div>
            <div className="mt-2 flex justify-center">
              <span className="policy">
                Already have an account?
                <Link
                  className="ml-2 inline-block align-baseline font-bold text-sm fg_policy"
                  to={"/"}
                >
                  Login
                </Link>
              </span>
            </div>
            <div className="mt-8">
              <p className="cpy">
                Copyright (c) 2022 ConnecCoin Trade All Rights Reserved
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </StyledRegister>
  );
};

export default Register;
