import React from "react";
import Layout from "../../commons/Layout";
import PageBreadCrumb from "../../commons/PageBreadCrumb";
import CartDetails from "./CartDetails";
import CartSummary from "./CartSummary";

function Cart() {
  return (
    <Layout bgClassName="bg-gray-100">
      <div className="w-[85%] mx-auto pt-8">
        <PageBreadCrumb
          mainText={"Home"}
          subText={"Cart"}
          otherText={""}
          isActiveIndex={1}
        />

        <div className="flex justify-between w-full gap-12 mt-6 pb-20">
          <div className="w-[60%] text-left">
            <CartDetails />
          </div>
          <div className="w-[35%] text-left">
            <CartSummary />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
