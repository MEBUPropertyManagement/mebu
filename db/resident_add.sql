INSERT INTO residents (email, password, isresident, propertyid, unitid, ownerid, firstname, lastname)
VALUES ($1, $2, 'true', $3, $4, $5, $6, $7)
RETURNING *