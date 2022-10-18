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
      <Link to="/categoria/video">Placas de video</Link>
      <Link to="/categoria/procesador">Procesadores</Link>
      <Link to="/categoria/memoria">Memorias RAM</Link>
      <Link to="/categoria/almacenamiento">Almacenamiento</Link>
      <Link to="/categoria/refrigeracion">Refrigeración</Link>
      <hr />
      <Link to="/marca/intel">Intel</Link>
      <Link to="/marca/amd">AMD</Link>
      <Link to="/marca/nvidia">Nvidia</Link>
    </div>
  );
};

export default CategoriesMenu;
