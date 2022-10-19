import "./ProductDetail.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCreditCard, FaCheckCircle, FaStore, FaTruck, FaShieldAlt } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <main className="productDetail">
      <div className="container">
        <div className="productDetailCard">
          <div className="firstRow">
            <div className="firstColumn">
              <h2>Micro Intel Celeron G6900 Alderlake 3.4Ghz 4Mb S.1700</h2>
              <Swiper modules={[Pagination]} pagination slidesPerView={1} className="productSwiper">
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
              </Swiper>
            </div>
            <div className="secondColumn">
                <div className="productPriceContainer">
                    <h3 className="productPrice">$13.528</h3>
                    <p>Precio Lista: $20.958,51</p>
                </div>

                <div className="productInfoContainer">
                    <div className="icon">
                        <FaCreditCard/>
                    </div>
                    <div className="content">
                        <p>12 cuotas sin interés de $1.747,38 a precio de lista</p>
                        <p>Ver cuotas</p>
                    </div>
                </div>
                <div className="productInfoContainer">
                    <div className="icon">
                        <FaCheckCircle/>
                    </div>
                    <div className="content">
                        <p>Stock disponible</p>
                        <p>Solo para venta web</p>
                    </div>
                </div>
                <div className="productInfoContainer">
                    <div className="icon">
                        <FaStore/>
                    </div>
                    <div className="content">
                        <p>Retiro ¡GRATIS!</p>
                        <p>SMT (Tucumán)</p>
                    </div>
                </div>
                <div className="productInfoContainer">
                    <div className="icon">
                        <FaTruck/>
                    </div>
                    <div className="content">
                        <p>Envío a todo el país</p>
                        <p>Ver costos de envío</p>
                    </div>
                </div>
                <div className="productInfoContainer">
                    <div className="icon">
                        <FaShieldAlt/>
                    </div>
                    <div className="content">
                        <p>Garantía</p>
                        <p>180 días</p>
                    </div>
                </div>

                <div className="productQuantity">
                    <button className="btnAddQuantity">-</button>
                    <div className="quantityDisplay">0</div>
                    <button className="btnRemoveQuantity">+</button>
                </div>

                <button className="btnAddToCart">
                    Agregar al carrito
                </button>

                <p className="productCode">Código: abc123x | Marca: Intel</p>
            </div>
          </div>
          <div className="secondRow">
            <h3>Especificaciones del producto</h3>
            <div className="productSpecs">
                <div className="specColumn">
                    <h4 className="specTitle">General</h4>
                    <hr />
                    <ul>
                        <li><h5 className="specDescTitle">Modelo</h5> <p className="specDesc">I5 12400F</p></li>
                        <li><h5 className="specDescTitle">Familia</h5> <p className="specDesc">Intel</p></li>
                        <li><h5 className="specDescTitle">Núcleos</h5> <p className="specDesc">6</p></li>
                        <li><h5 className="specDescTitle">Hilos</h5> <p className="specDesc">12</p></li>
                        <li><h5 className="specDescTitle">Frecuencia</h5> <p className="specDesc">4.4Ghz</p></li>
                        <li><h5 className="specDescTitle">Proceso de fabricación</h5> <p className="specDesc">10 Nm</p></li>
                        <li><h5 className="specDescTitle">Gráfica integrada</h5> <p className="specDesc">N/A</p></li>
                        <li><h5 className="specDescTitle">Socket</h5> <p className="specDesc">S.1700</p></li>
                    </ul>
                </div>

                <div className="specColumn">
                    <h4 className="specTitle">General</h4>
                    <hr />
                    <ul>
                        <li><h5 className="specDescTitle">Modelo</h5> <p className="specDesc">I5 12400F</p></li>
                        <li><h5 className="specDescTitle">Familia</h5> <p className="specDesc">Intel</p></li>
                        <li><h5 className="specDescTitle">Núcleos</h5> <p className="specDesc">6</p></li>
                        <li><h5 className="specDescTitle">Hilos</h5> <p className="specDesc">12</p></li>
                        <li><h5 className="specDescTitle">Frecuencia</h5> <p className="specDesc">4.4Ghz</p></li>
                        <li><h5 className="specDescTitle">Proceso de fabricación</h5> <p className="specDesc">10 Nm</p></li>
                        <li><h5 className="specDescTitle">Gráfica integrada</h5> <p className="specDesc">N/A</p></li>
                        <li><h5 className="specDescTitle">Socket</h5> <p className="specDesc">S.1700</p></li>
                    </ul>
                </div>

                <div className="specColumn">
                    <h4 className="specTitle">General</h4>
                    <hr />
                    <ul>
                        <li><h5 className="specDescTitle">Modelo</h5> <p className="specDesc">I5 12400F</p></li>
                        <li><h5 className="specDescTitle">Familia</h5> <p className="specDesc">Intel</p></li>
                        <li><h5 className="specDescTitle">Núcleos</h5> <p className="specDesc">6</p></li>
                        <li><h5 className="specDescTitle">Hilos</h5> <p className="specDesc">12</p></li>
                        <li><h5 className="specDescTitle">Frecuencia</h5> <p className="specDesc">4.4Ghz</p></li>
                        <li><h5 className="specDescTitle">Proceso de fabricación</h5> <p className="specDesc">10 Nm</p></li>
                        <li><h5 className="specDescTitle">Gráfica integrada</h5> <p className="specDesc">N/A</p></li>
                        <li><h5 className="specDescTitle">Socket</h5> <p className="specDesc">S.1700</p></li>
                    </ul>
                </div>

                <div className="specColumn">
                    <h4 className="specTitle">General</h4>
                    <hr />
                    <ul>
                        <li><h5 className="specDescTitle">Modelo</h5> <p className="specDesc">I5 12400F</p></li>
                        <li><h5 className="specDescTitle">Familia</h5> <p className="specDesc">Intel</p></li>
                        <li><h5 className="specDescTitle">Núcleos</h5> <p className="specDesc">6</p></li>
                        <li><h5 className="specDescTitle">Hilos</h5> <p className="specDesc">12</p></li>
                        <li><h5 className="specDescTitle">Frecuencia</h5> <p className="specDesc">4.4Ghz</p></li>
                        <li><h5 className="specDescTitle">Proceso de fabricación</h5> <p className="specDesc">10 Nm</p></li>
                        <li><h5 className="specDescTitle">Gráfica integrada</h5> <p className="specDesc">N/A</p></li>
                        <li><h5 className="specDescTitle">Socket</h5> <p className="specDesc">S.1700</p></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
