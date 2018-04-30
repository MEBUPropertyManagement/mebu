INSERT INTO owners (email, password, firstname, lastname, companyname)
VALUES ($1, $2, $3, $4, $5)
RETURNING *