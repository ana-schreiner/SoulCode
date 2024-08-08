import CardProduto from './CardProduto';
import './Galeria.css';
import imageCamera from '../assets/imageCamera.png';
import imageTripe from '../assets/imageTripe.png';
import imageLente from '../assets/imageLente.png';
import imageFlash from '../assets/imageFlash.png';
import imageRefletor from '../assets/imageRefletor.png';
import imageIluminacao from '../assets/imageIluminacao.png';


const produtos = [
  {
    nome: "CAMERA FOTOGRAFICA CANON 24.1MPX F/3.5-5.6 - 11 FUNÇÕES PERSONALIZADAS - PRETA",
    precoUnitario: 6899,
    desconto: 10,
    imagem: imageCamera
  },
  {
    nome: "NEEWER-fibra de carbono vídeo tripé com amortecimento, cabeça de fluido ajustável, LL55, 78",
    precoUnitario: 3811.19,
    desconto: 15,
    imagem: imageTripe
  },
  {
    nome: "Sirui Optical Lente da câmera Venus FF 35+50+75+100+ADP125X+ Case SE",
    precoUnitario: 3496.99,
    desconto: 5,
    imagem: imageLente
  },
  {
    nome: "Flash externo tudo-em-um",
    precoUnitario: 2799.91,
    desconto: 0,
    imagem: imageFlash
  },
  {
    nome: "Neewer Difusor | Refletor de Luz Clamshell p/ Fotografia",
    precoUnitario: 1245.97,
    desconto: 3,
    imagem: imageRefletor
  },
  {
    nome: "Kit De Iluminação Greika Pk-sb03 Para Estúdio Fotográfico",
    precoUnitario: 1140,
    desconto: 5,
    imagem: imageIluminacao
  }
];

function Galeria() {
  return (
    <div className="galeria">
      {produtos.map((produto, index) => (
        <CardProduto 
          key={index}
          nome={produto.nome}
          precoUnitario={produto.precoUnitario}
          desconto={produto.desconto}
          imagem={produto.imagem}
        />
      ))}
    </div>
  );
}
export default Galeria;
