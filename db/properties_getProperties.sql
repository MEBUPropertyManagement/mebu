select * from properties
WHERE ownerid = $1
ORDER BY name;
