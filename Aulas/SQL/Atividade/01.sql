-- Crie um banco de dados (ecommerce_db)
-- Crie uma tabela 'produto' com os campos: idProduto, nome, descricao, preco, estoque
-- Crie uma tabela 'venda' com os campos: idVenda, fkProduto, quantidade, data de venda
-- O relacionamento produto-venda é 1:N
-- Use os tipos e constraints que melhor se encaixam em cada campo
-- Insira dados e liste os dados de forma básica

CREATE DATABASE ecommerce_db; -- criando o bando de dados "comércio"

USE ecommerce_db; -- seleciona o banco para aplicar os comandos

-- Tabela 'produto'
CREATE TABLE produto (
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    preco DECIMAL(6, 2) NOT NULL,
    estoque DECIMAL(10, 2) NOT NULL
);

-- Tabela 'venda'
CREATE TABLE venda (
    idVenda INT PRIMARY KEY AUTO_INCREMENT,
    fkProduto INT NOT NULL, -- se comunica com o produto
    quantidade DECIMAL(10, 2) NOT NULL,
    dataDeVenda DATE NOT NULL,
    FOREIGN KEY (fkProduto) REFERENCES produto(idProduto) -- essa é a relação das tabelas
);

-- Inserir dados na tabela 'produto'
INSERT INTO produto (nome, descricao, preco, estoque) 
VALUES 
    ('Notebook Dell', 'Notebook Dell Inspiron 15, Core i5, 8GB RAM, 256GB SSD', 3500.00, 50),
    ('Mouse sem fio', 'Mouse sem fio Logitech MX Master 3', 150.99, 100),
    ('Livro de receitas', 'Livro de receitas com mais de 1000 receitas', 45.50, 200),
    ('Fones de ouvido', 'Fones de ouvido Bluetooth Sony WH-1000XM4', 200.00, 150);

-- Inserir dados na tabela 'venda'
INSERT INTO venda (fkProduto, quantidade, dataDeVenda) 
VALUES 
    (1, 2, '2024-07-23'),
    (2, 5, '2024-07-24'),
    (3, 1, '2024-07-25'),
    (4, 3, '2024-07-25');

-- Listar todos os produtos
SELECT * FROM produto;

-- Listar todas as vendas
SELECT * FROM venda;
