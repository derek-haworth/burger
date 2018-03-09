-- **********************************************************************************
-- This file is intended to help developers get their SQL Databases setup correctly.
-- It is important since other developers will be unlikely to have the same database or tables setup already. 
-- ***********************************************************************************

/* Create and use the burgers_db */
CREATE DATABASE  burgers_db;
USE burgers_db;

/* Create a table for all your burgers */
CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
); 


SELECT * FROM burgers;