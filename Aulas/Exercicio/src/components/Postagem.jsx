//Importante: importar para que os estilos do arquivo façam parte do arquivo
import "./Blog.css";

function Postagem() {
    const textoTitulo = "AventuraLand: O Mundo Mágico das Emoções!";
    const textoTitulo2 = "Emoção sem Limites: Descubra as Montanhas-Russas do AventuraLand!";
    const textoTitulo3 = "Explore Mundos Encantados no AventuraLand: Diversão para Toda a Família!";
    const nomeAutor = "Ana Schreiner";
    const linkImagem = "https://img.freepik.com/fotos-premium/um-parque-de-diversoes-colorido-com-um-arco-iris-no-ceu_867442-822.jpg?w=826";
    const linkImagem2 = "https://images.pexels.com/photos/1170790/pexels-photo-1170790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const linkImagem3 = "https://images.pexels.com/photos/3715987/pexels-photo-3715987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-Titulo">{textoTitulo.toUpperCase()}</h2>
            <img className="Image" src={linkImagem} alt="Imagem da mensagem"/>
            <p className="paragrafo">
            Localizado no coração da cidade, o AventuraLand é um destino imperdível para famílias e amigos em busca de diversão e emoção. Com atrações emocionantes que vão desde montanhas-russas vertiginosas até shows incríveis e áreas temáticas encantadoras, cada visita é uma jornada única e memorável. Explore nossos restaurantes deliciosos, lojas charmosas e experiências interativas que garantem sorrisos do início ao fim. Venha criar momentos inesquecíveis no AventuraLand, onde a magia da diversão nunca acaba!
            </p>
            <small>Criado por: {nomeAutor} </small>

            <h2 className="mensagem-Titulo">{textoTitulo2.toUpperCase()}</h2>
            <img className="Image" src={linkImagem2} alt="Imagem da mensagem"/>
            <p className="paragrafo">
            🎢🌟 Descubra a adrenalina no AventuraLand! 🌟🎡

            Prepare-se para uma experiência emocionante como nenhuma outra! Venha sentir a emoção das nossas montanhas-russas de tirar o fôlego, mergulhar nas curvas radicais e gritar de alegria! 🎢✨ Não perca a chance de explorar as atrações mais emocionantes da cidade!

            #AventuraLand #DiversãoSemLimites #MontanhaRussa #Emoção
            </p>
            <small>Criado por: {nomeAutor} </small>

            <h2 className="mensagem-Titulo">{textoTitulo3.toUpperCase()}</h2>
            <img className="Image" src={linkImagem3} alt="Imagem da mensagem"/>
            <p className="paragrafo">
            🎉✨ Magia e diversão para toda a família no AventuraLand! ✨🎠

            Deixe-se encantar pelas nossas áreas temáticas únicas, onde a fantasia ganha vida! Desde aventuras místicas até mundos encantados, cada cantinho do AventuraLand é uma nova descoberta para todas as idades. Venha criar memórias inesquecíveis conosco!

            #Família #Diversão #AventuraLand #Magia
            </p>
            <small>Criado por: {nomeAutor} </small>
        </section>
    );
}

export default Postagem;