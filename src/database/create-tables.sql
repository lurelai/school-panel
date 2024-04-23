CREATE TABLE IF NOT EXISTS students(
	student_name varchar(170) NOT NULL,
	student_nom_de_guerre varchar(100) UNIQUE NOT NULL,
	student_age varchar(10) NOT NULL,
	student_id varchar(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS teachers(
	teacher_name varchar(170) NOT NULL,
	teacher_age varchar(10) NOT NULL,
	teacher_id varchar(100) UNIQUE NOT NULL,
	teacher_external_id varchar(100) UNIQUE NOT NULL,
	teacher_password varchar(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS admin(
	admin_id varchar(100) UNIQUE NOT NULL,
	admin_password varchar(100) UNIQUE NOT NULL,
	admin_level varchar(5) UNIQUE NOT NULL 
);

