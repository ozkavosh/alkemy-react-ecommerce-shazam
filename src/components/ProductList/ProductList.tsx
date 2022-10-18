import "./ProductList.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import getCategoryName from "../../utils/getCategoryName";

const ProductList = () => {
    const { category } = useParams();

  return (
    <main className="productList">
      <div className="container">
        <div className="filters">
          <h2>{category && getCategoryName(category)}</h2>

          <div className="orderBy">
            <h3>Ordenar por</h3>
          </div>

          <div className="brand">
            <h3>Marca</h3>
          </div>

          <div className="storage">
            <h3>Almacenamiento</h3>
          </div>

          <div className="processorBrand">
            <h3>Linea del procesador</h3>
          </div>

          <div className="memory">
            <h3>Memoria</h3>
          </div>
        </div>

        <div className="products">
          {[...Array(12)].map((product) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductList;
