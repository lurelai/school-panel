CREATE TABLE IF NOT EXISTS students(
	name varchar(170) NOT NULL,
	nom_de_guerre varchar(100) UNIQUE NOT NULL,
	age varchar(10) NOT NULL,
	id varchar(100) UNIQUE NOT NULL
);

