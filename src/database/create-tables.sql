CREATE TABLE SCHOO_YEARS(
	name varchar(20),
	q_level varchar(40),
	ID varchar(40) NOT NULL UNIQUE
);

CREATE TABLE YEARS(
	year varchar(6) NOT NULL UNIQUE,
	ID varchar(40) NOT NULL UNIQUE
);

CREATE TABLE SUBJECTS(
	name varchar(60) NOT NULL,
	status varchar(15) NOT NULL
);

CREATE TABLE STUDENTS(
	name varchar(230) NOT NULL,
	age int NOT NULL,
	sex varchar(8) NOT NULL,
	ID varchar(40) NOT NULL UNIQUE
);

