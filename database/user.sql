use db_prueba;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL,
  password VARCHAR(60) ,
  email VARCHAR(100) ,
  token VARCHAR(1000),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
  );