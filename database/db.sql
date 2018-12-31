-- creating database

CREATE DATABASE crudnodejsmysql;

--using database

use crudnodejsmysql;

-- creating tables

CREATE TABLE customers(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	address VARCHAR(100) NOT NULL,
	phone VARCHAR(15)
);

-- to show all tables

SHOW TABLES;

-- to describe tha table

DESCRIBE customers;
