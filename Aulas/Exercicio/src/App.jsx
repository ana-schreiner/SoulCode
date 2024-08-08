// jsx => Javascript Extended
// Vai permitir escrever código "HTML"
// dentro do js
// Declarativa
// Açucar sintático

import Rodape from "./components/Rodape";
//import Blog from "./components/Blog";
import CardAluno from "./components/CardAluno";
import CardProduto from "./components/CardProduto";

// Componente principal da aplicação
function App() {
    return (
        <main>
            <CardProduto nome="Liquidificador" precoUnitario={214.99} desconto={5} />
            <CardProduto nome="Sanduicheira" precoUnitario={99.99} desconto={0} />
            <CardProduto nome="Batedeira" precoUnitario={289.99} desconto={10} />
            <CardAluno nome="Maria" serie="8º" media={8} />
            <CardAluno nome="Ricardo" serie="8º" media={5} />
            <CardAluno nome="Ângela" serie="8º" media={1} />
            {/* <Blog /> */}
            <Rodape />
        </main>
    );
}

export default App;