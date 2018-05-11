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
    <tr className="Maintenance__table-data" key={workorderid}>
      <td> {workorderid}</td>
      <td>{datestart}</td>
      <td>{dateend}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{unitid}</td>
      <td>{content}</td>
      <td>
        {!dateend ? (
          <button
            className="Maintenance__close-order"
            onClick={() => props.close(workorderid)}
          >
            Close Order
          </button>
        ) : null}
      </td>
    </tr>
  );
};

export default Workorder;
