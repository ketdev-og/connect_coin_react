import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Inputs, { SelectInput } from "../../components/inputs/Inputs";
import { StyledDeposit } from "./StyledDeposit";
import loadingSvg from "../../assets/img/loading.svg";
import { Form, Formik } from "formik";
const Deposite = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const data = location.state;

  const onSubmit = async (values) => {
    console.log(values);
  };
  useEffect(() => {
    console.log(data);
  }, []);
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

            <div className="reg_btn flex justify-center mt-8">
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
