import "./CategoriesMenu.scss";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const CategoriesMenu = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="categoriesMenu" ref={ref}>
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
});

export default CategoriesMenu;
