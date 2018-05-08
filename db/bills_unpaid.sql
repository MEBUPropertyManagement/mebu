select * from bills 
WHERE residentid = $1 and paid = false;