USE loja_db;

-- Filtrar os produtos com preço maior que 500.
SELECT *
FROM produto
WHERE preco > 500;

-- Filtrar os produtos com preço entre 500 e 1000.
SELECT *
FROM produto
WHERE preco BETWEEN 500 AND 1000;

-- Filtrar os produtos do vendedor com ID = 7.
SELECT *
FROM produto
WHERE fkVendedor = 7;

-- Filtrar os vendedores com email (hotmail ou yahoo).
SELECT *
FROM vendedor
WHERE email LIKE "%hotmail%" OR email LIKE "%yahoo%";

-- Filtrar os produtos do vendedor com ID = 1 e calcular o preço final do produto com desconto.
SELECT idProduto, nome, preco, percentualDesconto, preco * (1 - percentualDesconto / 100) AS preco_final
FROM produto
WHERE fkVendedor = 1;


-- Filtrar os produtos das categorias Roupas(2), Alimentos(3) e Acessórios(4).
SELECT *
FROM produto
WHERE fkCategoria IN ("2", "3", "4");

-- Listar o id dos vendedores do CE.
SELECT fkVendedor
FROM endereco
WHERE uf = "CE";

-- Listar os vendedores que nasceram após 2000. Tente utilizar a função YEAR(data)
SELECT *
FROM vendedor
WHERE dataNascimento > "2000-12-12";

-- Listar os vendedores que nasceram no mês atual (em que a consulta é feita). Tente utilizar MONTH (data) e CURDATE() para pegar a data atual.
SELECT idVendedor, nome, sobrenome, email, dataNascimento
FROM vendedor
WHERE MONTH(dataNascimento) = MONTH(CURDATE());

-- Filtre os produtos cujo estoque está entre 200 e 800. Ordene por preco decrescente, e limite a 5 registros.
SELECT 
    idProduto, nome, preco, estoque
FROM
    produto
WHERE
    estoque BETWEEN 200 AND 800
ORDER BY preco DESC
LIMIT 5;

-- Exiba nome, sobrenome e data de nascimento dos vendedores (renomear para aniversario), apenas os que nasceram entre 1993 e 1995, ordene por nome (ordem crescente) e limite a 20.
SELECT nome, sobrenome, dataNascimento AS aniversario
FROM vendedor
WHERE YEAR(dataNascimento) BETWEEN 1993 AND 1995
ORDER BY nome ASC
LIMIT 20;

-- Exiba nome, preco, lucro total (preco * estoque) da tabela produto. Apenas os produtos com categoria 1, 2, 3 E com preço menor que 100. Ordene por nome crescente. Limite a 100.
SELECT nome, preco, preco * estoque AS lucroTotal
From produto
WHERE fkCategoria IN (1, 2, 3) AND preco < 100
ORDER BY nome ASC
LIMIT 100;

-- Liste os produtos que possuem percentualDesconto maior que 0. Exiba as colunas nome, e uma chamada 'precoFinal' com o preco descontado. Ordene pelo maior percentual de desconto.
SELECT nome, preco, percentualDesconto, preco * (1 - percentualDesconto / 100) AS precoFinal
FROM produto
WHERE percentualDesconto > 0
ORDER BY percentualDesconto DESC;

-- Liste os produtos que a data de validade do desconto já expirou. Ordene por data crescente.
SELECT nome, validadeDesconto
FROM produto
WHERE validadeDesconto < CURDATE()
ORDER BY validadeDesconto ASC;

-- Aplique operações de UPDATE e DELETE nos dados caso necessário para testar os filtros.
UPDATE produto
SET validadeDesconto = '2023-12-31'
WHERE validadeDesconto < CURDATE();

DELETE FROM produto
WHERE validadeDesconto < CURDATE();