-- Comentário de uma linha
-- Para o SQL tanto faz caixa baixa e CAIXA ALTA -> BATATA = batata

SHOW DATABASES; -- mostra os bancos de dados

CREATE DATABASE empresa_db; -- cria um banco com o nome especificado

USE empresa_db; -- seleciona o banco para aplicar os comandos

-- DROP DATABASE empresa_db; -- apaga o banco de dados (TUDO)

-- Tabelas: departamento, colaborador, endereço

-- PRIMARY KEY = definir a coluna como chave primária
-- AUTO_INCREMENT = quando inserir um novo departamento o ID é aplicado automático
-- VARCHAR(limite) = tipo para texto
-- NOT NULL = tornar a coluna obrigatória
CREATE TABLE departamento(
	idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL
);

DESC departamento; -- descreve a tabela

SHOW TABLES; -- lista todas as tabelas

DROP TABLE departamento; -- remove a tabela do banco de dados

-- TIPOS 
	-- INT/INTEGER => até 2 bilhões
    -- BIGINT => até 9 quintilhões
    -- DECIMAL => precisão fixa / ex: preços de produtos
    -- FLOAT => até 7 casas de precisão
    -- DOUBLE => até 15 casas de precisão
    -- VARCHAR => textos simples
    -- TEXT => textos muito longos
    -- DATE => formato YYYY-mm-dd
    -- TIME => formato hh:mm:ss
    -- DATETIME => YYYY-mm-dd hh:mm:ss
    -- BLOB => arquivos (Binary Large Object)

-- UNIQUE => o valor do CPF é unico na coluna
CREATE TABLE colaborador(
	idColaborador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL, 
    salario DECIMAL(10, 2) NOT NULL,
    telefone VARCHAR(20) UNIQUE NOT NULL,
    dataNascimento DATE NOT NULL,
    fkDepartamento INT NOT NULL,
    FOREIGN KEY(fkDepartamento) REFERENCES departamento(idDepartamento)
);

CREATE TABLE endereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    cidade VARCHAR(30) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    rua VARCHAR(40) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    -- Usa "sem complemento" caso não definirmos o valor
    complemento VARCHAR(40) DEFAULT("Sem complemento"),
    fkColaborador INT NOT NULL,
    FOREIGN KEY(fkColaborador) REFERENCES colaborador(idColaborador)
);

-- Constraints
	-- NOT NULL => torna obrigatório a coluna
    -- UNIQUE => impede a repetição de valores na coluna
    -- DEFAULT => aplica valor padrão

SHOW TABLES;
DESC colaborador;

-- Inserção de dados
INSERT INTO departamento(nome) VALUES ("Recursos Humanos");
INSERT INTO departamento(nome) VALUES ("Marketing");
INSERT INTO departamento(nome) VALUES ("Financeiro");
INSERT INTO departamento(nome) VALUES ("TI");

SELECT * FROM departamento;

INSERT INTO colaborador (nome, cpf, salario, telefone, dataNascimento, fkDepartamento) VALUES ("José Ferreira", "11111111111", 5500.0, "+559999999", "1980-01-25", 4);

INSERT INTO colaborador (nome, cpf, salario, telefone, dataNascimento, fkDepartamento) VALUES ("João Carlos", "11111111112", 6000.0, "+559999991", "1993-04-30", 2);

INSERT INTO colaborador (nome, cpf, salario, telefone, dataNascimento, fkDepartamento) VALUES ("Maria Gomes", "11111111113", 7000.0, "+55982233", "1992-07-08", 1);

SELECT * FROM colaborador;

INSERT INTO endereco(cidade, uf, rua, numero, fkColaborador) VALUES ("Ubajara", "CE", "Rua X", "200", 1);

INSERT INTO endereco(cidade, uf, rua, numero, complemento, fkColaborador) VALUES ("Tianguá", "CE", "Rua Y", "300", "Complemento 1", 2);

INSERT INTO endereco(cidade, uf, rua, numero, complemento, fkColaborador) VALUES ("Tianguá", "CE", "Rua Z", "800", "Complemento 2", 3);

SELECT * FROM endereco;