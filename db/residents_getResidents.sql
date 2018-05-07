SELECT residents.firstname, residents.lastname, residents.email, units.roomnum, units.rent FROM residents
INNER JOIN units ON units.unitid = residents.unitid
WHERE residents.propertyid = $1 AND residents.isresident = true;