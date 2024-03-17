CREATE TABLE IF NOT EXISTS students(
	name varchar(300) NOT NULL,
	short_name varchar(50) NOT NULL,
	age float NOT NULL,
	ID varchar(100) NOT NULL UNIQUE,
	years json
);

