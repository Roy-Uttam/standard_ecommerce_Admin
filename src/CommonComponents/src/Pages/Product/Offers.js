// React Module Imports
import React from "react";
import { Link } from "react-router-dom";

// Import Swiper Slider components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Image Icons
import ImgIcon from '../../Assets/icons/img-icon.svg';

// Common Components Imports
import ProductCardsSlider from "../../CommonComponents/ProductCardSlider/ProductCardsSlider";
import BlackButton from "../../CommonComponents/Buttons/BlackButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Home/Home.css";

export default function Offers() {
  return <>
    <div className="container">
      <div className="offer_section">
        <div className="home_slider">
          <Swiper pagination={{
            clickable: true,
          }}
            modules={[Pagination]} className="mySwiper">
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
            <SwiperSlide><img src={ImgIcon} alt="ImgIcon" /></SwiperSlide>
          </Swiper>
        </div>
        <div className="feature_product">
          <h2 className="section_heading">Summer Offer</h2>
          <ProductCardsSlider />
          <Link to="/products"><BlackButton>EXPLORE</BlackButton></Link>
        </div>
        <div className="Latest_product" style={{ paddingBottom: "101px" }}>
          <h2 className="section_heading">Winter Offer</h2>
          <ProductCardsSlider />
          <Link to="/products"><BlackButton>EXPLORE</BlackButton></Link>
        </div>
      </div>
    </div>
  </>
}

