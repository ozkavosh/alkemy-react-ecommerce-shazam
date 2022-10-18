import "./Footer.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="categoriesList">
        <h3>Categorías</h3>
        <ul>
          <li>
            <Link to="/categoria/video">Placas de video</Link>
          </li>
          <li>
            <Link to="/categoria/procesador">Procesadores</Link>
          </li>
          <li>
            <Link to="/categoria/memoria">Memorias</Link>
          </li>
          <li>
            <Link to="/categoria/almacenamiento">Almacenamiento</Link>
          </li>
          <li>
            <Link to="/categoria/refrigeracion">Refrigeración</Link>
          </li>
          <li>
            <Link to="/categorias">Todas las categorías</Link>
          </li>
        </ul>
      </div>

      <div className="brandsList">
        <h3>Marcas</h3>
        <ul>
          <li>
            <Link to="/marca/intel">Intel</Link>
          </li>
          <li>
            <Link to="/marca/amd">AMD</Link>
          </li>
          <li>
            <Link to="/marca/nvidia">Nvidia</Link>
          </li>
        </ul>
      </div>

      <div className="helpList">
        <h3>Ayuda</h3>
        <ul>
          <li>
            <a href="https://whatsapp.com">Mensaje a soporte (WhatsApp)</a>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </div>

      <div className="networkList">
        <h3>Síguenos en nuestras redes</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
