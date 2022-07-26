import React from "react";
import SpringModal from "../../components/Modal/Modal";
import { StyledWithdraw } from "./StyledWithdraw";
import bitcoin from "../../assets/img/Bitcoin.png";
import card from "../../assets/img/card.png";
import paypal from "../../assets/img/PayPal.png";
import skrill from "../../assets/img/skrill.png";
import western from "../../assets/img/western.png";
import wire from "../../assets/img/wire.svg";
import Inputs from "../../components/inputs/Inputs";
import { Form, Formik } from "formik";
import Button from "../../components/Button/Button";

const Witdraw = () => {
  return (
    <StyledWithdraw>
      <div className="wit_top">
        <p>Make a Withdrawal Request</p>
      </div>
      <div className="wit_bal my-4">
        <div className="av_bal">
          <p>Available Balance</p>
        </div>
        <div className="av_bal">
          <p>$0.00</p>
        </div>
      </div>
      <div className="wit_bal my-4">
        <div className="av_bal">
          <p>Withdrawal</p>
        </div>
        <div className="av_bal">
          <p>$0.00</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <SpringModal imageUrl={bitcoin} details="Bitcoin (recommended)">
          <div className="flex justify-center">
            <img src={bitcoin} alt="" className="pay_logo w-20 h-20 " />
          </div>
          <Formik>
            <Form>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Input Amount"}
                    type={"number"}
                    name={"amount"}
                    id={"amount"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Wallet Address"}
                    type={"text"}
                    name={"wallet"}
                    id={"wallet"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button
                  outline={false}
                  text={"Proceed"}
                  styles={"text-center"}
                />
              </div>
            </Form>
          </Formik>
        </SpringModal>
        <SpringModal imageUrl={card} details="Transfers">
          <div className="flex justify-center">
            <img src={card} alt="" className="pay_logo w-20 h-20 " />
          </div>
          <Formik>
            <Form>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Name"}
                    type={"text"}
                    name={"name"}
                    id={"name"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Account Number"}
                    type={"number"}
                    name={"account"}
                    id={"account"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Bank"}
                    type={"text"}
                    name={"bank"}
                    id={"bank"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Amount"}
                    type={"number"}
                    name={"amount"}
                    id={"amount"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button
                  outline={false}
                  text={"Proceed"}
                  styles={"text-center"}
                />
              </div>
            </Form>
          </Formik>
        </SpringModal>
        <SpringModal imageUrl={paypal} details="Bitcoin (recommended)">
          <div className="flex justify-center">
            <img src={paypal} alt="" className="pay_logo w-20 h-20 " />
          </div>
          <Formik>
            <Form>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Phone Number"}
                    type={"text"}
                    name={"phone"}
                    id={"phone"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Birthday"}
                    type={"date"}
                    name={"dob"}
                    id={"dob"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Home Address"}
                    type={"text"}
                    name={"address"}
                    id={"address"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Postal Code"}
                    type={"number"}
                    name={"postal"}
                    id={"postal"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Account Name"}
                    type={"text"}
                    name={"acc_name"}
                    id={"acc_name"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Account Number"}
                    type={"number"}
                    name={"acc_number"}
                    id={"acc_number"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Bank Name"}
                    type={"text"}
                    name={"bank"}
                    id={"bank"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Routine Number"}
                    type={"text"}
                    name={"route"}
                    id={"route"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Amount"}
                    type={"number"}
                    name={"amount"}
                    id={"amount"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button
                  outline={false}
                  text={"Proceed"}
                  styles={"text-center"}
                />
              </div>
            </Form>
          </Formik>
        </SpringModal>
        <SpringModal imageUrl={skrill} details="Bitcoin (recommended)">
          <div className="flex justify-center">
            <img src={skrill} alt="" className="pay_logo w-20 h-20 " />
          </div>
          <Formik>
            <Form>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Full Name"}
                    type={"text"}
                    name={"name"}
                    id={"name"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Phone"}
                    type={"number"}
                    name={"phone"}
                    id={"phone"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Email"}
                    type={"text"}
                    name={"email"}
                    id={"email"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Amount"}
                    type={"number"}
                    name={"amount"}
                    id={"amount"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button
                  outline={false}
                  text={"Proceed"}
                  styles={"text-center"}
                />
              </div>
            </Form>
          </Formik>
        </SpringModal>
        <SpringModal imageUrl={western} details="Bitcoin (recommended)">
          <div className="flex justify-center">
            <img src={western} alt="" className="pay_logo w-20 h-20 " />
          </div>
          <Formik>
            <Form>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Full Name"}
                    type={"text"}
                    name={"name"}
                    id={"name"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Phone"}
                    type={"number"}
                    name={"phone"}
                    id={"phone"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Address"}
                    type={"text"}
                    name={"address"}
                    id={"address"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Amount"}
                    type={"number"}
                    name={"amount"}
                    id={"amount"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button
                  outline={false}
                  text={"Proceed"}
                  styles={"text-center"}
                />
              </div>
            </Form>
          </Formik>
        </SpringModal>
        <SpringModal imageUrl={wire} details="Bitcoin (recommended)">
          <div className="flex justify-center">
            <img src={wire} alt="" className="pay_logo w-20 h-20 " />
          </div>
          <Formik>
            <Form>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Full Name"}
                    type={"text"}
                    name={"name"}
                    id={"name"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Phone"}
                    type={"number"}
                    name={"phone"}
                    id={"phone"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <Inputs
                    label={"Email"}
                    type={"text"}
                    name={"email"}
                    id={"email"}
                  />
                </div>
                <div className="">
                  <Inputs
                    label={"Amount"}
                    type={"number"}
                    name={"amount"}
                    id={"amount"}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button
                  outline={false}
                  text={"Proceed"}
                  styles={"text-center"}
                />
              </div>
            </Form>
          </Formik>
        </SpringModal>
      </div>
    </StyledWithdraw>
  );
};

export default Witdraw;
