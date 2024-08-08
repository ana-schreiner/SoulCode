import './Banner.css';
import imagem from '../assets/banner.jpg';

function Banner() {
  return (
    <section className="banner">
      <img className="banner-image" src={imagem} alt="Banner"/>
    </section>
  );
}

export default Banner;
