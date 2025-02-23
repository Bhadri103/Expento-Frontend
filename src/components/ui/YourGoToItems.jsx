




import React from 'react';
import { FaPlus } from "react-icons/fa6";
import Tatasalt from '../../images/yourgotoitems/tata-salt.jpg';
import kurkure from '../../images/yourgotoitems/kurkure.png';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/home.css'
// ✅ Correct import for Swiper modules in v10+
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module

const YourGoToItems = () => {
    const items = [
        { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
        { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },
        // Add more items here...
        { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
        { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },
        // Add more items here...
        { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
        { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },
        { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
        { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },
 
    ];

    return (
        <section className="yourGoToItems">
            <div className="container">
                <div className="row">
                    <div className="col-6"> <h3 className='mb-0'>Your Go-to Items</h3> </div>
                    <div className="col-6"><p className='text-end mb-0'><Link to='/your-goto-list' className='see-all mb-0'>See All</Link></p> </div>


                    <div className="col-12">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true} // ✅ Enables infinite scrolling
                            autoplay={{
                                delay: 1300, // ✅ Slides change every 1 second
                                disableOnInteraction: false, // ✅ Autoplay continues even after user interaction
                            }}
                            breakpoints={{
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 4 },
                            }}
                            modules={[Autoplay]} // ✅ Added Autoplay module, removed Pagination
                            className="your-go-to-swiper"
                        >
                            {items.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="yourGotocardMain">
                                        <div className="offerStar d-flex justify-content-center align-items-center"><p>5% Off</p></div>
                                        <div className="yourgotoimgTop d-flex justify-content-center">
                                            <img src={item.image} alt={item.name} className='img-fluid' />
                                        </div>
                                        <div className="yourgotoimgBottom">
                                            <p className='prodName mb-0'>{item.name}</p>
                                            <p className="kg mb-0">{item.weight}</p>
                                            <div className="row mb-0">
                                                <div className="col-6">
                                                    <p className="price mb-0"><strike>{item.price}</strike></p>
                                                    <p className="off-price">{item.offPrice}</p>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <button className="btn plusIconBtn">
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YourGoToItems;
