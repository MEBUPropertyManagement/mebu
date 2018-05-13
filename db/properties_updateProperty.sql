UPDATE properties
SET name = $2, photourl = $3, address = $4, units = $5, value = $6, expenses = $7
WHERE propertyid = $1
returning *;