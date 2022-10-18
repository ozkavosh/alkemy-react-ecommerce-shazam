import "./CategoriesMenu.scss";
import { Link } from "react-router-dom";

type categoriesMenuProps = {
  show: Boolean
};

const CategoriesMenu = ({ show }: categoriesMenuProps) => {
  return (
    <div className={ show ? "categoriesMenu show" : "categoriesMenu hide"}>
      <Link to="/constructor">Arma tu PC</Link>
      <hr />
      <Link to="/categorias/video">Placas de video</Link>
      <Link to="/categorias/video">Procesadores</Link>
      <Link to="/categorias/video">Memorias RAM</Link>
      <Link to="/categorias/video">Almacenamiento</Link>
      <Link to="/categorias/video">Refrigeración</Link>
      <hr />
      <Link to="/marcas/intel">Intel</Link>
      <Link to="/marcas/amd">AMD</Link>
      <Link to="/marcas/nvidia">Nvidia</Link>
    </div>
  );
};

export default CategoriesMenu;
