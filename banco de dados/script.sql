-- Exercicio Desenvolvimento Web II --
-- Aplicação utilizando Node.js --
-- Aplicação BarTEC --

-- Drop se o banco já existir --

DROP DATABASE Bartec;

-- Criando a DataBase --

CREATE DATABASE IF NOT EXISTS Bartec;

-- Usando o Banco --

USE Bartec;

-- Criando as Tabelas --

CREATE TABLE Cliente (
	cliente_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	cliente_nome VARCHAR(100),
	cliente_uf VARCHAR(2)	
);


CREATE TABLE Pedido (
	pedido_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	pedido_preco FLOAT,
	pedido_nome VARCHAR (50),
	pedido_tipo VARCHAR (50)
);