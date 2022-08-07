import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Inputs, { SelectInput } from "../../components/inputs/Inputs";
import { StyledDeposit } from "./StyledDeposit";
import loadingSvg from "../../assets/img/loading.svg";
import { Form, Formik } from "formik";
import axios from "axios";
const Deposite = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate()
  
  useEffect(() => {
    console.log(data);
  }, []);

  const onSubmit = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      axios
        .post("http://localhost:8660/v1/auth/add/deposit", {
          ...values, id:data.id
        })
        .then((response) => {
          setLoading(false);
          localStorage.setItem("user", response.data.token);
          if (response.status === 200) {
            navigate("/dashboard/admin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  return (
    <StyledDeposit>
      <div className="mkd_intro">
        <p>Make Deposite</p>
      </div>
      <div>
        <Formik initialValues={data} onSubmit={onSubmit}>
          <Form action="" className="mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <Inputs
                  placeholder={"xxxxxxxx"}
                  type={"text"}
                  id={"account"}
                  label={"Account"}
                  name={"account"}
                  disabled={true}
                />
                <div className="fr_erm"></div>
              </div>
              <div className="">
                <Inputs
                  type={"text"}
                  label={"Amount"}
                  id={"amount"}
                  placeholder={""}
                  name={"amount"}
                />
                <div className="fr_erm"></div>
              </div>
            </div>

            <div className="reg_btn flex justify-end mt-8">
              <button type="submit" className="btn">
                Send{" "}
                {loading ? (
                  <img srcSet={loadingSvg} alt="" className="inline" />
                ) : null}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </StyledDeposit>
  );
};

export default Deposite;
