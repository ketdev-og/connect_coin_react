import React from "react";
import { StyledLogin } from "./StyledLogin";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Inputs from "../../components/inputs/Inputs";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import loadingSvg from "../../assets/img/loading.svg";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("invalid email address").required("required"),
  password: Yup.string()
    .min(8, "at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
      "should conatin a upper and lower case letters and a number"
    )
    .required("required"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      axios
        .post("http://localhost:5000/v1/auth/login", {
          ...values,
        })
        .then((response) => {
          setLoading(false);
          setErrorMessage("");
          localStorage.setItem("user", response.data.token);
          if (response.status === 200) {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          setLoading(false);
          setErrorMessage(err.response.data.error.message);
        });
    } catch (error) {}
  };
  return (
    <StyledLogin className="h-screen w-full flex justify-center items-center">
      <div className="login_con grid grid-cols-2 h-full w-full">
        <div className="bg-white lg_form flex flex-col justify-center items-center">
          <Logo />
          <p className="py-4 font-bold">Welcome Back</p>
          <div className="err_msg my-2 text-center text-red-600">
            <span>{errorMessage}</span>
          </div>
          <div className="w-full px-8">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="px-12 pt-6 pb-8 mb-4">
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
                <div className="flex flex-col items-center justify-between">
                  <Link
                    className="inline-block align-baseline font-bold text-sm fg_pass"
                    to={"/"}
                  >
                    Forgot Password?
                  </Link>
                  <div className="reg_btn flex justify-center w-5/6 mt-8">
                    <button type="submit" className="btn">
                      Sign In{" "}
                      {loading ? (
                        <img srcSet={loadingSvg} alt="" className="inline" />
                      ) : null}
                    </button>
                  </div>
                  <span className="dnt">
                    Dont have an account{" "}
                    <Link
                      className="inline-block align-baseline font-bold text-sm fg_pass"
                      to={"/Register"}
                    >
                      Sign Up
                    </Link>{" "}
                  </span>
                </div>
              </Form>
            </Formik>
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
