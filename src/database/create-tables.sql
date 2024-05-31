CREATE TABLE IF NOT EXISTS Years(
	ID varchar(30),
	year varchar(6) NOT NULL UNIQUE,
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS School_years(
	ID varchar(30),
	name varchar(30) NOT NULL,
	j_level varchar(30) NOT NULL,
	year varchar(6) NOT NULL,
	FOREIGN KEY(year) REFERENCES Years(ID),
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS Subjects(
	ID varchar(30),
	name varchar(70) NOT NULL UNIQUE,
	status varchar(14) NOT NULL,
	year_added varchar(6) NOT NULL,
	FOREIGN KEY(year_added) REFERENCES Years(ID),
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS Itinerary(
	ID varchar(30),
	type varchar(20) NOT NULL UNIQUE,
	year_added varchar(6) NOT NULL,
	FOREIGN KEY (year_added) REFERENCES Years(ID),
	PRIMARY KEY(ID)
);

