import React from 'react';

const Workorder = (props) => {
  const {
    workorderid, datestart, dateend, firstname, lastname, unitid, content,
  } = props;

  return (
    <tr className="Residents__table-data" key={workorderid}>
      <td>{workorderid}</td>
      <td>{datestart}</td>
      {dateend ? <td>{dateend}</td> : <td>Pending</td>}
      <td>{content}</td>
    </tr>
  );
};

export default Workorder;
