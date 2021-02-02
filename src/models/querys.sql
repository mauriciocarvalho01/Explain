INSERT INTO student (stud_name,stud_cod,stud_phone, stud_address, stud_cpf) 
VALUES 
("jhon Lennon", 7020738, "11974167525", '{
	"streetAddress": "Rua Fernando Lona",
    "number": "94",
    "addressLocality": "Campestre",
    "postalCode": "09560390"
}', "40830886802");



insert into student (iduser_profile) values (2);


INSERT INTO course (course_name,course_period) VALUES ("Análise e Desenvolvimento de Sistemas", "AM"); 
INSERT INTO course (course_name,course_period) VALUES ("Ciência da Computação", "PM"); 
UPDATE course SET course_cod = "CCI" WHERE course_name = "Ciência da Computação"; 
select * from course;

INSERT INTO course_has_student(idstudent,idcourse) VALUES (1,2); 


UPDATE student SET stud_name = "Estudante 01", 
stud_cod = 7020738, stud_phone = "11974167525",
stud_address = '{"streetAddress": "Rua Fernando Lona","number": "94","addressLocality": "Campestre","postalCode": "09560390"}', 
stud_cpf = '40830886800' WHERE iduser_profile = 2; 


select * from course_has_student;


ALTER TABLE course
ADD  course_cod VARCHAR(3); 

ALTER TABLE student
MODIFY COLUMN stud_phone INT(11);

SELECT * FROM course 
INNER JOIN course_has_student USING(idcourse) 
INNER JOIN student USING(idstudent)
INNER JOIN user_profile USING(iduser_profile) WHERE iduser_profile = 2;


SELECT * FROM student;