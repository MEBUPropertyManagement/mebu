import React from 'react';

const Workorder = (props) => {
  const {
    workorderid, datestart, dateend, firstname, lastname, unitid, content,
  } = props;

  return (
    <div key={workorderid}>
      <div>Workorder ID: {workorderid}</div>
      <div>Date Start: {datestart}</div>
      {dateend ? <div>Date End: {dateend}</div> : <div>Date End: Pending</div>}
      <div>Resident First Name: {firstname}</div>
      <div>Resident Last Name: {lastname}</div>
      <div>Unit ID: {unitid}</div>
      <div>Workorder ID: {workorderid}</div>
      <div>Content: {content}</div>
    </div>
  );
};

export default Workorder;
