insert into workorders (datestart, content, urgency, propertyid, residentid, unitid) values ($1, $2, $3, $4, $5, $6);
SELECT properties.name, owners.email FROM properties 
INNER JOIN workorders on workorders.propertyid = properties.propertyid
INNER JOIN owners on owners.ownerid = properties.ownerid
WHERE workorders.workorderid = LASTVAL();