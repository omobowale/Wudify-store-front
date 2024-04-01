import React, { useState } from "react";
import Layout from "../../commons/Layout";
import PageBreadCrumb from "../../commons/PageBreadCrumb";
import DividedPage from "../../commons/DividedPage";
import CardTitle from "../../commons/CardTitle";
import CustomRadioButton from "../../commons/CustomRadioButton";
import ShippingAddressItem from "./ShippingAddressItem";
import FullRoundedButton from "../../commons/FullRoundedButton";
import CartPriceItem from "../../commons/CartPriceItem";
import CustomInputField from "../../commons/CustomInputField";
import CustomTextField from "../../commons/CustomTextField";
import CustomSelectField from "../../commons/CustomSelectField";
import { PaystackButton } from "react-paystack";
import { verifyPayment } from "../../services/payment-service";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [alternative, setAlternative] = useState(false);
  const navigate = useNavigate();

  const amount = 33300000;
  const componentProps = {
    email: "stigawithfun@gmail.com",
    amount: amount,
    metadata: {
      name: "Omobowale",
      phone: "08077889900",
    },
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    text: `Pay N${amount / 100}`,
    onSuccess: (response) => {
      verifyPayment(response)
        .then((res) => {
          console.log("res", res);
          navigate(`/order-confirmation/${res.data.data.reference_number}`);
        })
        .catch((err) => console.log("err", err));
      //   console.log(result, "result");
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const leftSection = () => {
    return (
      <div>
        <CardTitle title="Shipping Address" />
        <ShippingAddressItem />
        <hr />
        <ShippingAddressItem />
        <button
          onClick={() => setAlternative(true)}
          className="text-center hover:border-0 hover:bg-gray-300 mt-2 border-2 w-full bg-gray-100 rounded-md py-4 font-[500] text-[14px]"
        >
          Add New Address
        </button>
      </div>
    );
  };

  const leftSectionAlternative = () => {
    return (
      <div>
        <CardTitle title="Shipping Address" />
        <p className="text-[16px] font-[600] my-7">New Address</p>
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <CustomInputField
              label={"First Name"}
              type="text"
              placeholder="Enter first name"
            />
          </div>
          <div className="w-1/2">
            <CustomInputField
              label={"Last Name"}
              type="text"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div>
          <CustomTextField label="Address" placeholder="Enter address" />
        </div>

        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <CustomSelectField
              label={"State"}
              type="text"
              placeholder="Enter first name"
            />
          </div>
          <div className="w-1/2">
            <CustomSelectField
              label={"LGA"}
              type="text"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <CustomSelectField
              label={"City"}
              type="text"
              placeholder="Enter first name"
            />
          </div>
          <div className="w-1/2">
            <CustomInputField
              label={"Mobile Number"}
              type="text"
              placeholder="Enter mobile number"
            />
          </div>
        </div>

        <div className="flex w-[50%] gap-3">
          <FullRoundedButton
            label="Save Address"
            className={
              "text-white bg-orange-400 hover:bg-orange-500 hover:text-white"
            }
          ></FullRoundedButton>
          <FullRoundedButton
            onClick={() => setAlternative(false)}
            label="Cancel"
          ></FullRoundedButton>
        </div>
      </div>
    );
  };

  const rightSection = () => {
    return (
      <div>
        <CardTitle title="Order Summary" />
        <div className="my-4">
          <hr />
        </div>
        <div>
          <div className="font-[600] text-[16px] mb-3 mt-5">Pay with</div>
          <div className="flex gap-2 items-center mb-2">
            <CustomRadioButton
              accentColor="black"
              radioName={"payment-type"}
            ></CustomRadioButton>
            <div className="font-[500] text-[16px]">Debit or Credit Card</div>
          </div>
          <div className="flex gap-2 items-center">
            <CustomRadioButton
              accentColor="black"
              radioName={"payment-type"}
            ></CustomRadioButton>
            <div className="font-[500] text-[16px]">Wallet Balance</div>
          </div>
        </div>
        <div className="my-7">
          <hr />
        </div>
        <div className="font-[600] text-[16px] mb-3 mt-5">Apply discount</div>
        <div className="flex items-center gap-2">
          <div className="w-[68%]">
            <input
              className="py-4 px-5 text-[14px] font-[400] rounded-full w-full bg-gray-100 outline-none"
              placeholder="Enter Coupon Code"
            />
          </div>
          <div className="w-[25%]">
            <FullRoundedButton
              className={
                "bg-white text-orange-400 hover:bg-orange-400 hover:text-white"
              }
              label={"Apply"}
            />
          </div>
        </div>
        <div className="my-7">
          <hr />
        </div>

        {/*  */}
        <CartPriceItem title="Sub Total" price="N30000" />
        <CartPriceItem title="VAT" price="N300" />
        <CartPriceItem title="Shipping" price="N3000" />
        <div className="my-7">
          <hr />
        </div>
        <CartPriceItem title="Total" price="N333000" />

        <PaystackButton
          className={
            "hover:bg-orange-500 bg-orange-300 text-white w-full mt-10 py-3 rounded-full font-[500] text-[16px]"
          }
          {...componentProps}
        />
      </div>
    );
  };

  return (
    <Layout bgClassName="bg-gray-100">
      <div className="w-[85%] mx-auto pt-8">
        <PageBreadCrumb
          mainText={"Home"}
          subText={"Cart"}
          otherText={"Checkout"}
          isActiveIndex={2}
        />

        <DividedPage
          leftSection={alternative ? leftSectionAlternative() : leftSection()}
          rightSection={rightSection()}
        ></DividedPage>
      </div>
    </Layout>
  );
}

export default Checkout;
