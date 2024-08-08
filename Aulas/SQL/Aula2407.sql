-- 24.07
-- UPDATE, DELETE e SELECT

USE empresa_db;

SHOW TABLES;

SELECT * FROM colaborador;

UPDATE colaborador
SET salario = 8500; -- UPDATE SEM WHERE: atualizar todas as linhas da tabela

UPDATE colaborador 
SET salario = 9000 
WHERE idColaborador = 3; -- WHERE: indica uma condição para aplicar o UPDATE

UPDATE colaborador
SET nome = "José Ferreira Gomes",
	salario = 7000,
    dataNascimento = "1976-04-20",
    fkDepartamento = 2
WHERE idColaborador = 1;

SELECT * FROM endereco;

UPDATE endereco
SET cidade = "Fortaleza",
	uf = "CE",
    rua = "Rua Z",
    numero = "956"
WHERE fkColaborador = 1;

-- Acrescentar 50 reais no salário dos colaboradores que são do Marketing
UPDATE colaborador
SET salario = salario + 50
WHERE fkDepartamento = 2;

SELECT * FROM colaborador;

-- Remover dados das tabelas
SELECT * FROM endereco;

DELETE FROM endereco; -- DELETE SEM WHERE: limpa a tabela

DELETE FROM colaborador
WHERE idColaborador = 3; -- PODE DAR ERRO SE O COLABORADOR TIVER DEPENDENTES

DELETE FROM departamento
WHERE idDepartamento = 2; -- PODE DAR ERRO SE EXISTIREM COLABORADORES NESTE DEPARTAMENTO