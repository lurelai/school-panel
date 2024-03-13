CREATE TABLE IF NOT EXISTS admin(
    name varchar(50) UNIQUE,
    password varchar(300)
);

CREATE TABLE IF NOT EXISTS students(
    student_id serial PRIMARY KEY,
    student_name varchar(200) NOT NULL,
    student_age float NOT NULL,
    student_password varchar(200) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS teachers(
    teacher_id serial PRIMARY KEY,
    teacher_name varchar(200) NOT NULL,
    teacher_age float NOT NULL,
    teacher_password varchar(200) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS classes(
    year varchar(20) UNIQUE NOT NULL,
    school_years json NOT NULL
);

