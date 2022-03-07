// React Module Imports
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

// Import Swiper Slider components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Image Icons
import ImgIcon from '../../Assets/icons/img-icon.svg';
// import Avatar from '../../Assets/icons/Avatar.svg';

// Common Components Imports
import ProductCardsSlider from "../../CommonComponents/ProductCardSlider/ProductCardsSlider";
import BlackButton from "../../CommonComponents/Buttons/BlackButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

export default function Home() {

    //banner carousel
    const [slideData, setSlideData] = useState([]);
    useEffect(() => {
        fetch(`${window.baseUrl}sliders`)
            .then((res) => {
                if(res.status === 200) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(data => setSlideData(data))
            .catch((error) => {
                console.log(error);
            })
    }, [])

    //testimonials
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch(`${window.baseUrl}testimonials`)
            .then((res) => {
                if(res.status === 200) {
                    return res.json()
                }
                else {
                    throw new Error(res.status)
                }
            })
            .then(data => setTestimonial(data))
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return <>
        <div className="container">
            <div className="home_section">
                <div className="home_slider">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        {slideData.status === true ? slideData.data.map((data, index) =>
                            <SwiperSlide key={index}><img src={data.image} alt="ImgIcon" /></SwiperSlide>

                        ) : 
                        <p>no data found</p>}
                    </Swiper>
                </div>

                {/* featured product */}
                <div className="feature_product">
                    <h2 className="section_heading">Related Products</h2>
                    <ProductCardsSlider />
                    <Link to="/products">
                        <BlackButton>EXPLORE</BlackButton>
                    </Link>
                </div>

                {/* top categories */}
                <div className="top_categories_section">
                    <h2 className="section_heading">What are you looking for?</h2>
                    <div className="top_Categories_content">
                        <Link to="/" className="category">
                            <div className="category_img">
                                <img src={ImgIcon} alt="ImgIcon" />
                            </div>
                            <div className="category_name">
                                <h3>Category Name</h3>
                            </div>
                        </Link>
                        <Link to="/" className="category">
                            <div className="category_img">
                                <img src={ImgIcon} alt="ImgIcon" />
                            </div>
                            <div className="category_name">
                                <h3>Category Name</h3>
                            </div>
                        </Link>
                        <Link to="/" className="category">
                            <div className="category_img">
                                <img src={ImgIcon} alt="ImgIcon" />
                            </div>
                            <div className="category_name">
                                <h3>Category Name</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* latest product */}
                <div className="Latest_product">
                    <h2 className="section_heading">latest Products</h2>
                    <ProductCardsSlider />
                    <Link to="/products">
                        <BlackButton>EXPLORE</BlackButton>
                    </Link>
                </div>

                {/* testimonial */}
                <div className="testimonial_section">
                    <h2 className="section_heading">Testimonials</h2>
                    <div className="tastimonial_slider">
                        <Swiper navigation={true} modules={[Pagination, Navigation]} pagination={{
                            clickable: true,
                        }} className="mySwiper">
                            {testimonial.status === true ? testimonial.data.map((data, index) =>
                            <SwiperSlide key={index}>
                                <div className="testimonial_content">
                                    <p>{data.testimonial}</p>
                                    <img className="user_img" src={data.image} alt={data.name} />
                                    <h3>{data.name}</h3>
                                    <h4>{data.designation}</h4>
                                </div>
                            </SwiperSlide>

                        ) : 
                        <p>no data found</p>}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </>
}

