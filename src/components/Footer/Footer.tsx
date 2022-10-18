import './Footer.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="categoriesList">
        <h3>Categorías</h3>
        <ul>
          <li>Placas de video</li>
          <li>Procesadores</li>
          <li>Memorias</li>
          <li>Almacenamiento</li>
          <li>Refrigeración</li>
          <li>Todas las categorías</li>
        </ul>
      </div>

      <div className="brandsList">
        <h3>Marcas</h3>
        <ul>
          <li>Intel</li>
          <li>AMD</li>
          <li>Nvidia</li>
        </ul>
      </div>

      <div className="helpList">
        <h3>Ayuda</h3>
        <ul>
          <li>Mensaje a soporte (WhatsApp)</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="networkList">
        <h3>Síguenos en nuestras redes</h3>
        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaTwitter/></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer