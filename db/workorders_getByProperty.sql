SELECT workorders.workorderid, workorders.datestart, workorders.dateend, workorders.content, workorders.urgency, workorders.propertyid, workorders.residentid, workorders.unitid, residents.firstname, residents.lastname FROM workorders
INNER JOIN residents ON residents.residentid = workorders.residentid
WHERE workorders.propertyid = $1;