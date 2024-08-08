-- Dicas para modelar as tabelas

-- 1:1 (Escolha a tabela mais dependente para colocar a chave estrangeira)
-- 1:N (Escolha a tabela do lado "muitos" para colocar a chave estrangeira)
-- N:N (Criar uma nova tabela "relacionamento" com as 2 chaves estrangeiras)

-- Cenário:
-- Você está desenvolvendo um sistema para uma livraria. O sistema deve gerenciar informações sobre livros, autores, editoras e clientes.

-- Parte 1: Crie as tabelas e relacionamentos seguindo o esquema acima
CREATE DATABASE livraria_db;
SHOW DATABASES;
USE livraria_db;

CREATE TABLE autor (
	idAutor INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	nacionalidade VARCHAR(50) NOT NULL
);

CREATE TABLE editora (
	idEditora INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	endereco VARCHAR(150) NOT NULL
);

CREATE TABLE livro (
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
	ISBN VARCHAR(13) NOT NULL,
	titulo VARCHAR(150) NOT NULL,
	anoPublicacao INT NOT NULL,
	genero VARCHAR(50) NOT NULL,
    fkEditora INT NOT NULL,
	FOREIGN KEY (fkEditora) REFERENCES editora(idEditora)
);

CREATE TABLE cliente(
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	telefone VARCHAR(15) NOT NULL
);

CREATE TABLE compras(
	idCompra INT PRIMARY KEY AUTO_INCREMENT,
	dataCompra DATE,
    fkCliente INT NOT NULL,
	FOREIGN KEY (fkCliente) REFERENCES cliente (idCliente),
	fkLivro INT NOT NULL,
	FOREIGN KEY (fkLivro) REFERENCES livro (idlivro)
);

CREATE TABLE autor_livro (
    idAutor INT NOT NULL,
    idLivro INT NOT NULL,
    PRIMARY KEY (idAutor, idLivro),
    FOREIGN KEY (idAutor) REFERENCES autor(idAutor) ON DELETE CASCADE,
    FOREIGN KEY (idLivro) REFERENCES livro(idLivro) ON DELETE CASCADE
);

-- Parte 2: Insira dados nas tabelas. Utilize pelo menos:
INSERT INTO autor (nome, nacionalidade) VALUES
('J.K. Rowling', 'Britânica'),
('George R.R. Martin', 'Americana'),
('J.R.R. Tolkien', 'Britânica');

INSERT INTO editora (nome, endereco) VALUES
('Editora ABC', 'Rua das Flores, 123, São Paulo, SP'),
('Editora XYZ', 'Avenida Paulista, 456, São Paulo, SP'),
('Editora DEF', 'Rua do Comercio, 789, Rio de Janeiro, RJ');

INSERT INTO livro (ISBN, titulo, anoPublicacao, genero, fkEditora) VALUES
('9783161484100', 'Harry Potter e a Pedra Filosofal', 1997, 'Fantasia', 1),
('9780553103540', 'As Crônicas de Gelo e Fogo', 1996, 'Fantasia', 2),
('9780618002213', 'O Senhor dos Anéis', 1954, 'Fantasia', 3),
('9781408855652', 'O Hobbit', 1937, 'Fantasia', 3),
('9780743273565', 'Nightflyers', 2019, 'Terror', 1);

INSERT INTO cliente (nome, email, telefone) VALUES
('Ana Silva', 'ana.silva@email.com', '1234-5678'),
('Carlos Souza', 'carlos.souza@email.com', '2345-6789'),
('Fernanda Lima', 'fernanda.lima@email.com', '3456-7890'),
('João Oliveira', 'joao.oliveira@email.com', '4567-8901');

INSERT INTO compras (dataCompra, fkCliente, fkLivro) VALUES
('2024-07-01', 1, 1),
('2024-07-02', 2, 2),
('2024-07-03', 3, 3),
('2024-07-04', 4, 4),
('2024-07-05', 1, 5),
('2024-07-06', 2, 1);

INSERT INTO autor_livro (idAutor, idLivro) VALUES 
(1, 1),
(2, 2),
(3, 3),
(3, 4),
(2, 4);

SELECT * FROM autor;
SELECT * FROM editora;
SELECT * FROM livro;
SELECT * FROM cliente;
SELECT * FROM compras;

-- Parte 3: Atualize o endereço de uma editora específica
UPDATE editora
SET endereco = ('Rua dos Dálmatas, 654, Belo Horizonte, BH')
WHERE endereco = ('Rua do Comercio, 789, Rio de Janeiro, RJ');

-- Parte 4: Exclua um livro específico da tabela livro
DELETE FROM compras
WHERE fkLivro = 5;

DELETE FROM livro
WHERE idLivro = 5;

-- Parte 5: Consultas e Ordenação:
-- Liste todos os livros publicados por uma determinada editora
SELECT * FROM livro
	JOIN editora
    ON livro.fkEditora = editora.idEditora
WHERE editora.nome = 'Editora ABC';

-- Liste todos os livros de um autor específico
SELECT l.idLivro, l.titulo, l.anoPublicacao, l.genero, a.nome
FROM autor a
JOIN autor_livro al ON a.idAutor = al.idAutor
JOIN livro l ON al.idLivro = l.idLivro
WHERE a.nome = 'George R.R. Martin';
    
-- Liste todos os clientes que compraram um livro específico
SELECT DISTINCT c.idCliente, c.nome
FROM cliente c
JOIN compras comp ON c.idCliente = comp.fkCliente
JOIN livro l ON comp.fkLivro = l.idLivro
WHERE l.titulo = 'Harry Potter e a Pedra Filosofal';

-- Liste todas as compras realizadas em uma data específica
SELECT co.idCompra, co.dataCompra, c.nome AS nome_cliente, l.titulo AS tituloLivro
FROM compras co
JOIN cliente c ON co.fkCliente = c.idCliente
JOIN livro l ON co.fkLivro = l.idLivro
WHERE co.dataCompra = '2024-07-06';

-- Faça uma consulta que retorne os nomes dos clientes e os títulos dos livros que eles compraram
SELECT c.nome AS nome_cliente, l.titulo AS titulo_livro
FROM cliente c
JOIN compras co ON c.idCliente = co.fkCliente
JOIN livro l ON co.fkLivro = l.idLivro;

-- Realize uma consulta que liste todos os livros em ordem alfabética pelo título
SELECT *
FROM livro
ORDER BY titulo ASC;

-- Liste todas as compras com informações dos clientes e dos livros comprados
SELECT co.idCompra, c.nome, c.email, c.telefone, l.titulo, l.ISBN, co.dataCompra
FROM compras co
JOIN cliente c ON co.fkCliente = c.idCliente
JOIN livro l ON co.fkLivro = l.idLivro;

-- Parte 6: Adicione uma nova coluna preco na tabela ‘livro’ e atualize os preços dos livros já inseridos.
ALTER TABLE livro
ADD preco DECIMAL(10, 2) NOT NULL;
UPDATE livro
SET preco = 29.90
WHERE idLivro = 1;
