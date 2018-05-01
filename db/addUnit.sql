insert into units (size, occupied, bed, bath, roomnum, propertyid) values ($1, $2, $3, $4, $5, $6)
returning *;