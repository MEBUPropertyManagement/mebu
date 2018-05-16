import React from 'react';

const WorkorderItems = props => (
  <tr className="Residents__table-data">
    <td>{props.workorderid}</td>
    <td>{props.datestart}</td>
    <td>{props.content}</td>
    <td>{props.dateend}</td>
  </tr>
);

export default WorkorderItems;
