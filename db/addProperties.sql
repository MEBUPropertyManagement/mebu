insert into properties(name, photourl, address, units, value, expenses, ownerid) values ($1, $2, $3, $4, $5, $6, $7)
returning *;