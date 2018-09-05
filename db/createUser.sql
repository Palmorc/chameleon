INSERT INTO users(username,email,auth_id)
VALUES(${name},${email},${sub})
RETURNING *;
