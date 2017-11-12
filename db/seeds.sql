USE dinero_db;

INSERT INTO user (first_name, last_name, username, password, budget, emergency) VALUES ("Nate", "Spry", "nspry", "nate123", "2000", "10");
INSERT INTO user (first_name, last_name, username, password, budget, emergency) VALUES ("Nate2", "Spry", "nspry", "nate123", "3500", "10");
INSERT INTO user (first_name, last_name, username, password, budget, emergency) VALUES ("Nate3", "Spry", "nspry", "nate123", "3000", "10");

INSERT INTO expenses (name, category, amount_due, due_date, UserId) VALUES ("Drink", "Food", "200", "213131249141", "2");
INSERT INTO expenses (name, category, amount_due, due_date, UserId) VALUES ("Eats", "Food", "100", "2131132131232", "2");
INSERT INTO expenses (name, category, amount_due, due_date, UserId) VALUES ("Gas", "Utilities", "50", "1321315421412", "1");

INSERT INTO income (name, type, amount, UserId) VALUES ("VisaCredit", "Credit", "20000", "1");
INSERT INTO income (name, type, amount, UserId) VALUES ("Wallet", "Cash", "100", "1");
INSERT INTO income (name, type, amount, UserId) VALUES ("VisaDebit", "Debit", "5000", "2");