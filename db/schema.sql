CREATE DATABASE dinero_db;
USE dinero_db;

CREATE TABLE available_money
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	available_amount INTEGER,
	PRIMARY KEY (id)
);

CREATE TABLE categories
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(40),
	spent_amount INTEGER,
	PRIMARY KEY (id)
);

CREATE TABLE cards_cash
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	card_name VARCHAR(40),
	spent_amount INTEGER,
	PRIMARY KEY (id)
);

CREATE TABLE emergency
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	emergency_amount INTEGER,
	PRIMARY KEY (id)
);

CREATE TABLE additional_income
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	addin_name VARCHAR(40),
	addin_amount INTEGER,
	PRIMARY KEY (id)
);

CREATE TABLE bitcoin
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	current_value INTEGER,
	PRIMARY KEY (id)
);