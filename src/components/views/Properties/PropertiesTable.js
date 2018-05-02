import React from 'react';

const PropertiesTable = ({
  name, address, units, value, expenses,
}) => (
  <div>
    <p>{name}</p>
    <p>{address}</p>
    <p>{units}</p>
    <p>{value}</p>
    <p>{expenses}</p>
  </div>
);
export default PropertiesTable;
