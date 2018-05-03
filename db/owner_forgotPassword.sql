UPDATE owners SET password = $1 WHERE owners.email = $2
RETURNING *