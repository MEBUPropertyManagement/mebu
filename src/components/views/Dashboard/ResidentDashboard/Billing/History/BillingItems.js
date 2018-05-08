import React from 'react';

const BillingItems = props => (
  <tr>
    <td>{props.billid}</td>
    <td>{props.paid ? 'Yes' : 'No'}</td>
    <td>{props.amount}</td>
  </tr>
);

export default BillingItems;
