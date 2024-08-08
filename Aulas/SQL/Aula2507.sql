-- Aula 25.07
-- Junção -> combinar linhas de duas ou mais tabelas com base numa condição de relacionamento

-- Exemplos de uso da junção:
	-- Listar os produtos dos vendedores que moram no CE
    -- Listar os produtos com categoria de "Roupas"
    -- Listar os vendedores com o estado e cidade que moram
    
USE loja_db;

SELECT produto.nome AS nomeProduto, categoria.nome AS nomeCat -- usamos desta forma para diferenciar colunas com o mesmo nome
FROM produto, categoria -- produto cartesiano (combina todas as possibilidades de linhas)
WHERE produto.fkCategoria = categoria.idCategoria; -- trás as combinações que de fato correspondem (produto e categoria se relacionam)

-- OBS: A sintaxe acima faz a junção entre produto e categoria, porém é bastante ineficiente.

-- Utilizar o JOIN para fazer consultas eficientes

-- Produto + Categoria (fkCategoria = idCategoria)
SELECT *
FROM produto
	JOIN categoria -- combinar as linhas de produto e categoria
	ON produto.fkCategoria = categoria.idCategoria; -- indica quando ocorrerá a combinação das linhas

-- Quando as colunas tiverem o mesmo nome faça: tabela.coluna
SELECT P.nome AS nomeProduto, C.nome AS nomeCategoria, P.preco
FROM produto P
	JOIN categoria C
    ON P.fkCategoria = C.idCategoria
WHERE C.nome = "Brinquedos" AND P.preco > 20;

-- Vendedor + Endereço (idVendedor = fkVendedor)
SELECT V.nome, V.sobrenome
FROM vendedor V
	JOIN endereco E
    ON V.idVendedor = E.fkVendedor
WHERE E.uf IN ("SP", "CE", "MG");

-- Q1: Liste o nome dos vendedores com produtos acima de 0.20 de desconto.
SELECT DISTINCT V.idVendedor, V.nome
FROM vendedor V
	JOIN produto P
    ON V.idVendedor = P.fkVendedor
WHERE P.percentualDesconto > 0.20;

-- Q2: Liste o nome dos produtos e a sua respectiva categoria. Filtre os produtos com preço entre 100 e 300 reais.
SELECT P.nome, C.nome, P.preco
FROM produto P
	JOIN categoria C
    ON P.fkCategoria = C.idCategoria
WHERE P.preco BETWEEN 100 AND 300;

-- Q3: Liste os produtos dos vendedores que nasceram entre 1995 e 1999.
SELECT P.nome
FROM produto P
	JOIN vendedor V
    ON V.idVendedor = P.fkVendedor
WHERE YEAR(V.dataNascimento) BETWEEN 1995 AND 1999;

-- Q4: Liste os produtos juntamente com o nome completo do vendedor responsável.
SELECT P.nome AS produto, CONCAT(V.nome, " ", V.sobrenome) AS responsavel
FROM produto P
	JOIN vendedor V
    ON V.idVendedor = P.fkVendedor;
    
-- Q5: Liste os produtos que são vendidos no CE (Produto + Vendedor + Endereço)
SELECT P.nome, P.preco, V.nome, P.percentualDesconto, E.cidade
FROM produto P
	JOIN vendedor V
    ON V.idVendedor = P.fkVendedor
    JOIN endereco E
    ON V.idVendedor = E.fkVendedor
WHERE E.uf = "CE" AND P.percentualDesconto > 0;

-- Q6: Listar os estados que possuem os produtos mais caros.
SELECT E.uf, P.nome, P.preco
FROM produto P
	-- JOIN vendedor V
    -- ON V.idVendedor = P.fkVendedor
	JOIN endereco E 
    ON P.fkVendedor = E.fkVendedor
ORDER BY preco DESC;