UPDATE residents
SET email = $2, firstname = $3, lastname = $4
WHERE residents.residentid = $1
RETURNING residents.email, residents.firstname, residents.lastname