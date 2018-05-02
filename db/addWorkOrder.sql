insert into workorders (datestart, content, urgency, propertyid, residentid, unitid) values ($1, $2, $3, $4, $5, $6)
returning *;