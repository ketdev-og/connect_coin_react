import React, {useState } from "react";
import Inputs, { SelectInput } from "../../components/inputs/Inputs";
import Logo from "../../components/Logo/Logo";
import { StyledEditProfile } from "./StyledEditProfile";
import { Form, Formik } from "formik";

import axios from "axios";
import loadingSvg from "../../assets/img/loading.svg";
import { useLocation, useNavigate } from "react-router-dom"



const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation()
  let data = location.state?.data;

  const navigate = useNavigate();


  const token = localStorage.getItem("user");


  const onSubmit = async (values) => {
    try {
      setLoading(true)
      axios
        .post("http://localhost:5000/v1/auth/update_user", {
          ...values,
        }, {
          headers: {
            authorization: `${token}`,
          }
        })
        .then((response) => {
          setLoading(false)

          if (response.status === 200) {
            navigate("/dashboard/profile");
          }

        })
        .catch((err) => {
          setLoading(false)
        });
    } catch (error) {

    }
  };

  return (

    <StyledEditProfile className="w-full bg-white px-20">
      <div className="reg_con rounded my-10 p-8">
        <div className="reg_logo flex flex-col items-center rounded">
          <Logo />
        </div>
        <div className="err_msg my-8 text-center text-red-600">

        </div>
        <Formik
          initialValues={data}
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

                </div>
              </div>
            </div>

            <div className="reg_btn flex justify-center mt-8">
              <button type="submit" className="btn">
                Update{" "}
                {loading ? (
                  <img
                    srcSet={loadingSvg}
                    alt=""
                    className="inline"
                  />
                ) : null}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </StyledEditProfile>
  );
};

export default EditProfile;
