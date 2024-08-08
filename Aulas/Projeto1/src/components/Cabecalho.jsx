import './Cabecalho.css';
import imagem from '../assets/logo.png';

function Cabecalho() {
  const ClickEntrar = () => {
    window.alert('Erro: Você não possui permissão para acessar esta área.');
  };

  return (
    <header>
      <div className="header-container">
        <img className="logo" src={imagem} alt="Logo" />
        <div className='nomeJargao'>
          <h1 className="header-title">Foco Total Fotografia</h1>
          <p className="header-text">Capturando momentos, revelando histórias!</p>
        </div>
        <div className="botoes">
          <a href="#">Início</a>
          <a href="#">Produtos</a>
          <a href="#">Contato</a>
          <a href="#" onClick={ClickEntrar}>Entrar</a>
        </div>
      </div>
    </header>
  );
}

export default Cabecalho;

