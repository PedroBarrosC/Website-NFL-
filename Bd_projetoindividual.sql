create database projeto_individual; 
use projeto_individual; 

create table usuario (
id int primary key auto_increment,
nome varchar (50),
email varchar (100),
senha varchar (50), 
time_favorito int,
constraint fk_time FOREIGN KEY (time_favorito) REFERENCES times(id_time)
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


CREATE TABLE resultados_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    erros INT,
    pontuacao INT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fk_usuario int,
    CONSTRAINT fk_usuario_resultado foreign KEY (fk_usuario)REFERENCES usuario(id)
);

select u.nome, r.pontuacao from usuario as u join resultados_quiz as r on r.fk_usuario = u.id ; 

SELECT t.nome_time, COUNT(*) AS quantidade
FROM usuario u
JOIN times t ON u.time_favorito = t.id_time
GROUP BY t.nome_time;

SELECT * from resultados_quiz; 
    
    SELECT u.nome, r.acertos, r.erros
FROM resultados_quiz r
JOIN usuario u ON r.fk_usuario = u.id;


create view selects as
SELECT usuario.nome, usuario.email, usuario.senha, times.nome_time as time_favorito
FROM usuario
JOIN times ON usuario.time_favorito = times.id_time; 


select *  from resultados_quiz 



