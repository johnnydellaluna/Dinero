CREATE DATABASE dinero_db;
USE dinero_db;

CREATE TABLE user
(
	first_name VARCHAR(20),
	last_name VARCHAR (20),
	username VARCHAR (20),
	password VARCHAR (20),
	available_amount INTEGER,
	emergency_amount INTEGER,
	addin_name VARCHAR(40),
	addin_amount INTEGER,
	fav_stock_name VARCHAR(20),
	fav_stock_current_value INTEGER
);

CREATE TABLE expenses
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	card_name VARCHAR(30),
	category_name VARCHAR (30),
	spent_amount INTEGER,
	PRIMARY KEY (id)
);