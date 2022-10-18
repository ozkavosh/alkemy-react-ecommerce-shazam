import "./Home.scss";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <main className="home">
      <Swiper
        modules={[Navigation, Autoplay]}
        className="promoSwiper"
        autoplay={{ delay: 3000 }}
        loop
        navigation
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      <section className="container">
        <article className="promoBanner"></article>

        <article className="recommended">
          <h2>PCs Recomendadas</h2>
          <div className="computers">
            <div className="computer"></div>
            <div className="computer"></div>
            <div className="computer"></div>
          </div>
        </article>

        <article className="newEntries">
          <h2>Últimas novedades</h2>
          <Swiper
            className="newEntriesSwiper"
            loop
            slidesPerView={5}
            spaceBetween={35}
          >
            {[...Array(6)].map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={undefined} alt="asd" className="entryImg" />
                <h3 className="entryTitle">
                  Notebook Gfast 14" N-110 Intel Celeron N4020 4GB Ram 128GB SSD
                  FreeDOS
                </h3>
                <div className="entryInfo">
                  <p className="entryPrice">$95.382</p>
                  <p className="entryFee">12 cuotas sin interés de</p>
                  <p className="entryFeePrice">$2.500</p>
                </div>
                <button className="btnEntryDetail" type="button">
                  Ver más
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </section>
    </main>
  );
};

export default Home;
