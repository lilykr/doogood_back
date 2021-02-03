/* Replace with your SQL commands */

ALTER TABLE category
ADD logo varchar(100) NOT NULL;

ALTER TABLE charity 
RENAME COLUMN `adress` TO `address`;


ALTER TABLE event 
RENAME COLUMN `adress` TO `address`;