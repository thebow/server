DROP DATABASE IF EXISTS eventogo;

CREATE DATABASE eventogo;

USE eventogo;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  role varchar(5) NOT NULL ,
  name varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  date varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  selected boolean ,
  PRIMARY KEY (id)
);
-- from slim this table for the events selected by the user that will be added in the profile component
CREATE TABLE  favorite(
  id_user int ,
  id_event int,
  -- primary key (id_event),
  -- primary key (id_user),
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_event) REFERENCES events(id)
);

-- ALTER TABLE events
-- ADD FOREIGN KEY (user_id) REFERENCES users(id);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/
