import React, { useState } from "react";
import {
    Card,
    CardBody,
    Col,
    Row,
} from "reactstrap";
import { IoBagHandle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import '../../styles/product-details.css'
import product1 from "../../images/products/img-1.png";
import product6 from "../../images/products/img-6.png";
import product8 from "../../images/products/img-8.png";
import SimilarProduct from './SimilarProduct'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

function EcommerceProductDetail(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="container">
            <Row>
                <Col lg={12}>
                    <Card>
                        <CardBody>
                            <Row className="gx-lg-5">
                                <Col xl={4} md={8} className="mx-auto">
                                    <div className="product-img-slider sticky-side-div">
                                        <Swiper
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            className="swiper product-thumbnail-slider p-2 rounded bg-light"
                                        >
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <img
                                                        src={product8}
                                                        alt=""
                                                        className="img-fluid d-block"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img
                                                        src={product6}
                                                        alt=""
                                                        className="img-fluid d-block"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img
                                                        src={product1}
                                                        alt=""
                                                        className="img-fluid d-block"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img
                                                        src={product8}
                                                        alt=""
                                                        className="img-fluid d-block"
                                                    />
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>

                                        <div className="product-nav-slider mt-2">
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                spaceBetween={10}
                                                className="swiper product-nav-slider mt-2 overflow-hidden"
                                            >
                                                <div className="swiper-wrapper">
                                                    <SwiperSlide className="rounded">
                                                        <div className="nav-slide-item">
                                                            <img
                                                                src={product8}
                                                                alt=""
                                                                className="img-fluid d-block rounded"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="nav-slide-item">
                                                            <img
                                                                src={product6}
                                                                alt=""
                                                                className="img-fluid d-block rounded"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="nav-slide-item">
                                                            <img
                                                                src={product1}
                                                                alt=""
                                                                className="img-fluid d-block rounded"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="nav-slide-item">
                                                            <img
                                                                src={product8}
                                                                alt=""
                                                                className="img-fluid d-block rounded"
                                                            />
                                                        </div>
                                                    </SwiperSlide>
                                                </div>
                                            </Swiper>
                                        </div>
                                    </div>
                                </Col>

                                <Col xl={8}>
                                    <div className="mt-xl-0 mt-5">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <p className="productName">Full Sleeve Sweatshirt for Men (Pink)</p>
                                                <div className="row">
                                                    <div className="col-12 d-flex align-items-center "> <span className="starRatingIcon d-flex align-items-center ">
                                                        <FaStar /> <FaStar />  <FaStar /> <FaStar /> <FaStar />

                                                        <span className="ms-1">  5</span>

                                                    </span>

                                                        <span className="ms-3">
                                                            <strike className='me-2'>Rs. 3000</strike></span>
                                                        <span className="prodPrice">Rs. 2000</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                        <Row>
                                            <Col xl={6}>
                                                <div className=" mt-4">
                                                    <p className="product-detail-title">Sizes </p>
                                                    <div className="d-flex flex-wrap gap-2">



                                                        <button
                                                            className="   btn-size"

                                                        >
                                                            S
                                                        </button>
                                                        <button
                                                            className="   btn-size"

                                                        >
                                                            M
                                                        </button>
                                                        <button
                                                            className="   btn-size"

                                                        >
                                                            L
                                                        </button>
                                                        <button
                                                            className="   btn-size"

                                                        >
                                                            XL
                                                        </button>
                                                        <button
                                                            className="   btn-size"

                                                        >
                                                            XXL
                                                        </button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={3} sm={6}>
                                                <div className=" mt-4">
                                                    <p className="product-detail-title">  Color</p>
                                                    <div className="d-flex flex-wrap gap-2">

                                                        <button
                                                            className=" clr-btn  btn-black"
                                                        >

                                                        </button>
                                                        <button
                                                            className="clr-btn   btn-blue"
                                                        >

                                                        </button>
                                                        <button
                                                            className="clr-btn   btn-red"
                                                        >
                                                        </button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={3} sm={6} className="d-flex align-items-end">
                                                <div >
                                                    <button className="addtoCart  btn btn-primary mt-2">
                                                        <IoBagHandle /> <span className="ms-2">Add to cart</span>
                                                    </button>
                                                </div>
                                            </Col>


                                        </Row>

                                        <div className="mt-4 text-muted">
                                            <p className="product-detail-title mb-1">Description</p>
                                            <p>
                                                Tommy Hilfiger men striped pink sweatshirt. Crafted
                                                with cotton. Material composition is 100% organic
                                                cotton. This is one of the world’s leading designer
                                                lifestyle brands and is internationally recognized.
                                            </p>
                                        </div>
                                        <div className="mt-4 text-muted">
                                            <p className="product-detail-title mb-1">Customer Review</p>
                                            <p>

                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <SimilarProduct />
        </div >
    );
}

export default EcommerceProductDetail;