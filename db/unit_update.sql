UPDATE units
SET size = $2, occupied = $3, bed = $4, bath = $5, roomnum = $6, propertyid = $7, rent = $8
WHERE units.unitid = $1
RETURNING *