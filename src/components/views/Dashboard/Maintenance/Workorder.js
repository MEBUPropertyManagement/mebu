import React from 'react';

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
    <tr key={workorderid}>
      <td> {workorderid}</td>
      <td>{datestart}</td>
      <td>{dateend}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{unitid}</td>
      <td>{workorderid}</td>
      <td>{content}</td>
      <td>
        {!dateend ? (
          <button onClick={() => props.close(workorderid)}>Close Order</button>
        ) : null}
      </td>
    </tr>
  );
};

export default Workorder;
