drop user if exists 'app';
drop database if exists cosc4353app;
commit;
-- Initialize the database
create database cosc4353app;
use cosc4353app;
-- Create our tables

-- User Table

-- Profile Table
CREATE TABLE profile (
        client_username  varchar(16) NOT NULL CHECK(client_username REGEXP '^[a-zA-Z0-9]{3,}$'),
        full_name varchar(50),
        email varchar(50) NOT NULL CHECK(email REGEXP '^[[:alnum:]]+([\.-]?[[:alnum:]]+)*@\[[:alnum:]]+([\.-]?[[:alnum:]]+)*(\.[[:alnum:]]{2,3})+$'),
        address1 varchar(80),
        address2 varchar(80),
        city varchar(50),
        state char(2),
        zipcode char(5) CHECK(zipcode IS NULL OR (zipcode REGEXP '^[0-9]{5}$')),
        phone char(10) NOT NULL CHECK(phone REGEXP '[0-9]{10}'),
        PRIMARY KEY(client_username),
        FOREIGN KEY(client_username) REFERENCES users(username)
);

-- Quote Table

-- Sessions Table