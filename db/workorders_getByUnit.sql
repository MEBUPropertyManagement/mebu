SELECT * FROM workorders
WHERE unitid = $1
ORDER BY workorders.workorderid;
