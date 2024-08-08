-- No banco de dados empresa_db
-- Adicione uma tabela 'dependente' com os campos: nome, idade.
-- Insira dados e liste os dados de forma básica
-- Relacione com a tabela colaborador

SHOW DATABASES; -- mostra os bancos de dados

CREATE DATABASE empresa_db; -- Cria um banco com nome especificado

USE empresa_db; -- Seleciona o banco para aplicar os comandos

CREATE TABLE departamento(
	idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(30) NOT NULL 
);

CREATE TABLE colaborador(
	idColaborador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL, 
    salario DECIMAL(10, 2) NOT NULL,
    telefone VARCHAR(20) UNIQUE NOT
-- Relação de 1:N com a tabela de colaborador - 1 colaborador pode ter muitos dependentes e cada dependente 1 colaborador
CREATE TABLE dependente (
    idDependente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    idade INT NOT NULL,
    fkColaborador INT NOT NULL,
    FOREIGN KEY(fkColaborador) REFERENCES colaborador(idColaborador)
);