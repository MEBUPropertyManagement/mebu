import React from 'react';
import './Workorder.css';

const Workorder = props => {
  const {
    workorderid,
    datestart,
    dateend,
    firstname,
    lastname,
    unitid,
    content
  } = props;

  return (
    <div key={workorderid}>
      <div>Workorder ID: {workorderid}</div>
      <div>Date Start: {datestart}</div>
      <div>Date End: {dateend}</div>
      <div>Resident First Name: {firstname}</div>
      <div>Resident Last Name: {lastname}</div>
      <div>Unit ID: {unitid}</div>
      <div>Workorder ID: {workorderid}</div>
      <div>Content: {content}</div>
      {!dateend ? (
        <button
          className="Workorder__close-order"
          onClick={() => props.close(workorderid)}
        >
          Close Order
        </button>
      ) : null}
    </div>
  );
};

export default Workorder;
