-- Crie um banco de dados (pedidos_db)
-- Crie uma tabela 'usuario' e uma tabela 'pedido'
-- O relacionamento usuario-pedido é 1:N
-- Insira dados e liste os dados de forma básica
-- As colunas da tabela ficam ao seu critério
-- Use os tipos e constraints que melhor se encaixam em cada campo

-- Criar o banco de dados
CREATE DATABASE pedidos_db;

-- Usar o banco de dados criado
USE pedidos_db;

-- Tabela 'usuario'
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    dataCadastro DATE NOT NULL
);

-- Tabela 'pedido'
CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    dataPedido DATE NOT NULL
);

-- Inserir dados na tabela 'usuario'
INSERT INTO usuario (nome, email, dataCadastro) 
VALUES 
    ('João Silva', 'joao@example.com', '2024-07-23'),
    ('Maria Souza', 'maria@example.com', '2024-07-23'),
    ('Carlos Oliveira', 'carlos@example.com', '2024-07-22');

-- Inserir dados na tabela 'pedido'
INSERT INTO pedido (idUsuario, descricao, valor, dataPedido) 
VALUES 
    (1, 'Notebook', 3500.00, '2024-07-23'),
    (1, 'Mouse sem fio', 150.99, '2024-07-24'),
    (2, 'Livro de receitas', 45.50, '2024-07-23'),
    (3, 'Fones de ouvido', 200.00, '2024-07-22');

-- Listar todos os usuários
SELECT * FROM usuario;

-- Listar todos os pedidos
SELECT * FROM pedido;