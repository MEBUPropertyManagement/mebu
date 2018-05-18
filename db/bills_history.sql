select * from bills
WHERE residentid = $1
ORDER BY datepaid;
