CREATE TABLE IF NOT EXISTS Years(
	ID varchar(30),
	year varchar(6) NOT NULL UNIQUE,

	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS School_years(
	ID varchar(30),
	name varchar(30) NOT NULL,
	j_level varchar(30) NOT NULL,
	year varchar(30) NOT NULL,

	FOREIGN KEY(year) REFERENCES Years(ID),
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS Subjects(
	ID varchar(30),
	name varchar(70) NOT NULL UNIQUE,
	status varchar(14) NOT NULL,
	year_added varchar(30) NOT NULL,

	FOREIGN KEY(year_added) REFERENCES Years(ID),
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS Itinerarys(
	ID varchar(30),
	type varchar(20) NOT NULL UNIQUE,
	year_added varchar(30) NOT NULL,

	FOREIGN KEY(year_added) REFERENCES Years(ID),
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS Classes(
	ID varchar(30),
	name varchar(30) NOT NULL,
	from_year varchar(30) NOT NULL,
	from_school_year varchar(30) NOT NULL,
	itinerary varchar(30),
	students varchar(30) ARRAY,
	subjects varchar(30),

	FOREIGN KEY(from_year) REFERENCES Years(ID),
	FOREIGN KEY(from_school_year) REFERENCES School_years(ID),
	FOREIGN KEY(itinerary) REFERENCES Itinerarys(ID),
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS Grade(
	ID varchar(30),
	grades JSONB,
	class varchar(30) NOT NULL,

	FOREIGN KEY(class) REFERENCES Classes(ID),
	PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS Students(
	ID varchar(30),
	name varchar(100) NOT NULL,
	age int NOT NULL,
	sex varchar(8) NOT NULL,
	classes varchar(30) ARRAY,

	PRIMARY KEY(ID)
);

