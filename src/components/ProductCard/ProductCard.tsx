import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="productCard">
      <img src={undefined} alt="asd" className="productImg" />
      <h3 className="productTitle">
        Notebook Gfast 14" N-110 Intel Celeron N4020 4GB Ram 128GB SSD FreeDOS
      </h3>
      <div className="productInfo">
        <p className="productPrice">$95.382</p>
        <p className="productFee">12 cuotas sin interés de</p>
        <p className="productFeePrice">$2.500</p>
      </div>
      <button className="btnProductDetail" type="button">
        Ver más
      </button>
    </div>
  );
};

export default ProductCard;
