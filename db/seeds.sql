INSERT INTO available_money (available_amount) VALUES (5000);

INSERT INTO categories (category_name) VALUES ("Food");
INSERT INTO categories (category_name) VALUES ("Health");
INSERT INTO categories (category_name) VALUES ("Rent");
INSERT INTO categories (category_name) VALUES ("Phone");

INSERT INTO cards_cash (card_name, spent_amount) VALUES ("American Express", 50);
INSERT INTO cards_cash (card_name, spent_amount) VALUES ("Discover", 60);
INSERT INTO cards_cash (card_name, spent_amount) VALUES ("Mastercard", 300);
INSERT INTO cards_cash (card_name, spent_amount) VALUES ("Cash", 45);

INSERT INTO emergency
-- A couple of ways we can handle this. We can have whenever the user puts in an available_amount in the available_money table, 15% (or some other percentage) is automatically removed and placed in emergency,
-- therefore, the available_amount will always be manipulated by the system. OR we can have the number on screen without removing from the table, alerting the user that this is a RECOMMENDED AMOUNT to not go under.

INSERT INTO additional_income (addin_name, addin_amount) VALUES ("Birthday", 100);
INSERT INTO additional_income (addin_name, addin_amount) VALUES ("DraftKings", 25);
-- These values should add automatically into available_money

INSERT INTO bitcoin (current_value) VALUES (7065);