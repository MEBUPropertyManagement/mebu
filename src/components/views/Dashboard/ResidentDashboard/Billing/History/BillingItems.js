import React from "react";

const BillingItems = props => (
  <tr>
    <td>{props.datepaid}</td>
    <td>{props.billid}</td>
    <td>{props.amount}</td>
    <td>{props.paid ? "Yes" : "No"}</td>
  </tr>
);

export default BillingItems;
