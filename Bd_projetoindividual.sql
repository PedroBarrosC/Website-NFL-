create database projeto_individual; 
use projeto_individual; 

create table usuario (
id int primary key auto_increment,
nome varchar (50),
email varchar (100),
senha varchar (50), 
time_favorito varchar (100)
); 

select * from usuario; 

create table times (
id_time int primary key auto_increment, 
nome_time varchar (100) 
); 

insert into times (nome_time )values
("Arizona Cardinals"),
("Atlanta Falcons"),
("Buffalo Bills"),
("Carolina Panthers"),
("Chicago Bears"),
("Cincinnati Bengals"),
("Cleveland Browns"),
("Dallas Cowboys"),
("Denver Broncos"),
("Detroit Lions"),
("Green Bay Packers"),
("Houston Texans"),
("Indianapolis Colts"),
("Jacksonville Jaguars");

alter table usuario add column fk_time int; 

ALTER TABLE usuario
ADD CONSTRAINT fk_usuario_time
FOREIGN KEY (fk_time)
REFERENCES times(id_time);
