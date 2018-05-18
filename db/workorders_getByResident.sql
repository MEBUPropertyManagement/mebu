select * from workorders
WHERE residentid = $1
ORDER BY workorders.workorderid;
