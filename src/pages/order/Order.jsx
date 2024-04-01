import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../commons/Layout";

function Order({}) {
  const params = useParams();
  const ref = params?.reference
  return (
    <Layout bgClassName="bg-gray-100">
      <div className="flex items-center justify-center h-[80vh]">
        <div className="p-5 rounded-lg bg-white shadow-md w-[35%] mx-auto">
          <div className="flex justify-center">
            <img src="/assets/success-icon.png" alt="" />
          </div>
          <div className="text-[28px] font-[600] mt-4 py-2">
            Order Confirmed
          </div>
          <div className="text-[#667185] text-[14px] font-[500]">
            <div className="mt-1 mb-4">Thank you for shopping on Wudify</div>
            <div>
              <span className="bg-gray-200 rounded-md py-2 px-2">
                Order Number: #{ref}
              </span>
            </div>
            <div className="my-5 w-[70%] mx-auto text-left">
              Congratulation! Your order was successfully submitted. A
              confirmation email has been sent to you.
            </div>
            <div className="my-3 w-[70%] mx-auto text-left">
              You will receive an update about your order when it has been
              shipped.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Order;
