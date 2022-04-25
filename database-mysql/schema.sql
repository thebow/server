DROP DATABASE IF EXISTS eventogo;

CREATE DATABASE eventogo;

USE eventogo;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  role varchar(5) NOT NULL ,
  name varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
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
-- CREATE TABLE  favorite(
--   id_user int ,
--   id_event int,
--   primary key (id_event),
--   primary key (id_user),
--   FOREIGN KEY (id_user) REFERENCES users(id),
--   FOREIGN KEY (id_event) REFERENCES events(id)
-- );

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `password`, `email`) VALUES
(1, 'user', 'Khayre', '123', 'user@gmail.com'),
(2, 'user', 'nameKhayre', '123', 'user2@gmail.com'),
(3, 'admin', 'Ali Ben', '123', 'admin@gmail.com'),
(4, 'user', 'aaa', '123', 'user3@gmail.com'),
(5, 'user', 'Kais', '123', 'kais@gmail.com'),
(6, 'user', 'Mahjoub', '123', 'user4@gmail.com');

INSERT INTO events (id,title,description,date,image,type) VALUES
(1,)
(2,)
(3,)
(4,)
(5,)
(6,)
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/
