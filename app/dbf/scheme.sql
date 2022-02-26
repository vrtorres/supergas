CREATE DATABASE IF NOT EXISTS supergas_db CHARACTER SET utf8 COLLATE utf8_bin;
use supergas_db;
DROP TABLE IF EXISTS Clients;
DROP TABLE IF EXISTS Purchases;
CREATE TABLE IF NOT EXISTS Clients(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255),
  code varchar(255) UNIQUE,
  phone varchar(255),
  zone varchar(255),
	PRIMARY KEY(id)
	);
	CREATE TABLE IF NOT EXISTS Purchases_states(
  	id int NOT NULL AUTO_INCREMENT,
  	name varchar(255),
  	PRIMARY KEY(id)
  );
  CREATE TABLE IF NOT EXISTS Purchases(
  	id int NOT NULL AUTO_INCREMENT,
  	date_purchase varchar(255),
    date_delivery varchar(255),
		quantity int,
    state int,
		client int,
		FOREIGN KEY (state) REFERENCES Purchases_states(id),
		FOREIGN KEY (client) REFERENCES Clients(id),
  	PRIMARY KEY(id)
  );
