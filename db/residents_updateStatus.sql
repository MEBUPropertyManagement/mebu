UPDATE residents SET isresident = $1 WHERE residentid = $2
RETURNING *