create database prueba;
use prueba;

create table empleados(
id int auto_increment primary key,
name varchar(50) not null Comment 'name of person',
lastname varchar(50) not null,
mobile numeric(11) not null
);
