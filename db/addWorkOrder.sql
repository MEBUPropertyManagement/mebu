insert into workorders (datestart, dateend, content, urgency, propertyid, residentid, unitid) values ($1, $2, $3, $4, $5, $6, $7)
returning *;