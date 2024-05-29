CREATE TABLE IF NOT EXISTS subjects(
	subject_name varchar(100),
	year_added varchar(6),
	ID varchar(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS years(
	value varchar(6),
	ID varchar(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS CLASSES(
	itinerary varchar(40) NOT NULL,
	name varchar(20) NOT NULL,
	ID varchar(100) UNIQUE NOT NULL
)

