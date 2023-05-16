import {Navbar} from "@/components/navbar";
import React from "react";
import {Link} from "react-router-dom";

interface PaymentStatusProps {}

export const PaymentStatus: React.FunctionComponent<PaymentStatusProps> = (props) => {
  return <>
    <Navbar/>
    <div className="overflow-x-auto w-9/12 mx-auto mt-5">
      <h1 className={"text-5xl font-bold text-primary mb-3"}>Payment Status</h1>
      <p>
        Your payment was successful.
      </p>
      <Link to={"/"} className={"btn btn-primary mt-3"}>Continue Shopping</Link>
    </div>
    </>;
};