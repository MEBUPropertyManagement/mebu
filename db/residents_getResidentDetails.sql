SELECT owners.email, owners.firstname, owners.lastname, properties.name, properties.photourl, properties.address, units.roomnum, units.rent FROM residents
INNER JOIN owners ON owners.ownerid = residents.ownerid
INNER JOIN properties ON properties.propertyid = residents.propertyid
INNER JOIN units ON units.unitid = residents.unitid
WHERE residents.residentid = $1;