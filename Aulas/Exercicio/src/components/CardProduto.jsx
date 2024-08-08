import "./CardProduto.css";

// <CardProduto nome="" precoUnitario={0} desconto={0}/>
function CardProduto(props) {
    const valorDesconto = props.precoUnitario - (props.precoUnitario * (props.desconto / 100));
    return (
        <article className="card-produto">
            <p>{props.nome}</p>
            {props.desconto > 0 && <p className="grifado">R$ {props.precoUnitario.toFixed(2)}</p>}
            {props.desconto > 0 ? <h4>R$ {valorDesconto.toFixed(2)}</h4> : <h4>R$ {props.precoUnitario.toFixed(2)}</h4>}
            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
        </article>
    );
}

export default CardProduto;