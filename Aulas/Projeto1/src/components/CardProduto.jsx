import './Galeria.css'; 

function CardProduto(props) {
    const valorDesconto = props.precoUnitario - props.precoUnitario * (props.desconto/100);
    
    return (
        <article className="card-produto">
            <img src={props.imagem} alt={props.nome} className="produto-imagem" />
            <p>{props.nome}</p>
            {props.desconto > 0 && <p className="grifado">R$ {props.precoUnitario}</p>}
            {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.precoUnitario}</h4>}
            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
            <button className="botao-comprar" onClick={handleComprarClick}>Comprar</button>
        </article>
    );
}

export default CardProduto;
