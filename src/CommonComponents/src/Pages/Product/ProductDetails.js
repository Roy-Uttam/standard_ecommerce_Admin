// React Module Imports
import React, { useState } from "react";

// Import Swiper Slider components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";


// import Image Icons
import LargeImg from "../../Assets/icons/large-img.png";
import SmallImg from "../../Assets/icons/small-img.png";
import Fevorite from '../../Assets/icons/Favorite.svg';

// Common Components Imports
import ProductCardsSlider from "../../CommonComponents/ProductCardSlider/ProductCardsSlider";
import BlackButton from "../../CommonComponents/Buttons/BlackButton";
import Quantity from "../../CommonComponents/Quantity";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import "./ProductDetails.css";

export default function Product(props) {
    const {toAdd, cartItems}= props
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <section className="page_padding">
                <div className="container">
                    <div className="PD_contents">
                        <div className="product_slider">
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                direction={"vertical"}
                                navigation={false}
                                thumbs={{ swiper: thumbsSwiper }}
                                mousewheel={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src={LargeImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={LargeImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={LargeImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={LargeImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={LargeImg} alt="thumb" />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={13}
                                slidesPerView={4}
                                freeMode={true}
                                direction={"vertical"}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={SmallImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={SmallImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={SmallImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={SmallImg} alt="thumb" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={SmallImg} alt="thumb" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="PD_text_content">
                            <div className="sm_div_price_Wish">
                                <h3>৳420.14</h3>
                                <button className="add_wish"><img src={Fevorite} alt="Fevorite" /> Add to wishlist</button>
                            </div>
                            <div className="product_name">
                                <h3>Product Name</h3>
                                <p className="path">Category , Sub- Category</p>       
                            </div>
                            <div className="product_price">
                                <h3>৳420.14</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat incididunt ut labore et dolore. </p>
                            </div>
                            <div className="product_sizes">
                                <h3>Size</h3>
                                <div className="Product_size_content">
                                    <h3>S</h3>
                                    <h3>L</h3>
                                    <h3>X</h3>
                                    <h3>XL</h3>
                                    <h3>XXL</h3>
                                </div>
                            </div>
                            <div className="add_to">
                                <Quantity cartItems={cartItems}/>
                                <BlackButton onClick={()=>toAdd(cartItems)} ><p >ADD TO CART</p> </BlackButton>
                                <button className="add_wish"><img src={Fevorite} alt="Fevorite" /> Add to wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="related_products">
                        <h2>Related Products</h2>
                        <ProductCardsSlider />
                    </div>
                </div>
            </section>
        </>
    );
}
