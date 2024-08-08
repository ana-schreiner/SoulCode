// function CardAluno (props) {
//     if(props.aprovado) {
//         mensagem = "Você está aprovado!"
//         } else {
//         mensagem = "Você está reprovado!";
//     }
//     return (
//         <header>
//         <hr />
//         {props.Aprovado && props.media `<= 7`}
//     </header>
//     );
// }

// export default CardAluno;

import './CardAluno.css';

function CardAluno(props) {
    let mensagem;
    let classeCSS;

    if (props.media >= 7) {
        mensagem = "Aprovado!";
        classeCSS = "aprovado";
    } else {
        mensagem = "Reprovado!";
        classeCSS = "reprovado";
    }

    return (
        <div className={`card-aluno ${classeCSS}`}>
            <hr />
            <p>Nome: {props.nome}</p>
            <p>Série: {props.serie}</p>
            <p>Média: {props.media}</p>
            <p>{mensagem}</p>
        </div>
    );
}

export default CardAluno;
