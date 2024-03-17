CREATE TABLE IF NOT EXISTS students(
	name varchar(300) NOT NULL,
	short_name varchar(50) NOT NULL,
	age float NOT NULL,
	ID varchar(100) NOT NULL UNIQUE,
	years json
);

CREATE TABLE IF NOT EXISTS years(
	year varchar(10) NOT NULL UNIQUE,
	school_years json
);

CREATE TABLE IF NOT EXISTS teachers(
	name varchar(300) NOT NULL,
	shor_name varchar(50) NOT NULL,
	age float NOT NULL,
	ID varchar(100) NOT NULL UNIQUE,
	years json
)

