CREATE TABLE IF NOT EXISTS students(
	name varchar(300) NOT NULL,
	short_name varchar(50) NOT NULL,
	age float NOT NULL,
	ID varchar(100) NOT NULL UNIQUE,
	PASSWORD varchar(100) NOT NULL,
	grade jsonb
);

CREATE TABLE IF NOT EXISTS years(
	year varchar(10) NOT NULL UNIQUE,
	school_years jsonb
);

CREATE TABLE IF NOT EXISTS teachers(
	name varchar(300) NOT NULL,
	short_name varchar(50) NOT NULL,
	age float NOT NULL,
	ID varchar(100) NOT NULL UNIQUE,
	PASSWORD varchar(100) NOT NULL,
	years jsonb
)

