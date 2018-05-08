insert into bills (paid, datepaid, amount, residentid) values ($1, $2, $3, $4)
returning *;