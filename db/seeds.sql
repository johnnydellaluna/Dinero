USE dinero_db;

INSERT INTO user (first_name, last_name, username, password, available_amount, emergency_amount, addin_name, addin_amount, fav_stock_name, fav_stock_current_value) VALUES ("Johnny", "Dellaluna", "jdl123", "password", 5000, 750, "Birthday Gift", 100, "Bitcoin", 7065);

INSERT INTO expenses (card_name, category_name, spent_amount) VALUES ("American Express", "Food", 50);
INSERT INTO expenses (card_name, category_name, spent_amount) VALUES ("Discover", "Health", 60);
INSERT INTO expenses (card_name, category_name, spent_amount) VALUES ("Mastercard", "Rent", 300);
INSERT INTO expenses (card_name, category_name, spent_amount) VALUES ("Cash", "Phone", 45);