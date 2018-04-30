INSERT INTO residents (email, password, firstname, lastname)
VALUES ($1, $2, $3, $4)
RETURNING *