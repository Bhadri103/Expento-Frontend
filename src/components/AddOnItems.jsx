import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { FaPlus } from "react-icons/fa";
import "swiper/css";
import offerstar from "../images/yourgotoitems/offer-star.svg";

const styles = {
  offerStar: {
    position: "absolute",
    height: "20px",
    width: "20px",
    backgroundImage: `url(${offerstar})`,
    right: "-20px",
    top: "-22px",
    fontSize: "13px",
    fontWeight: 700,
    padding: "30px",
    color: "white",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    zIndex: 1000,
  },
  plusIconBtn: {
    border: "1px solid rgba(129, 129, 129, 0.37)",
    borderRadius: "8px",
    padding: "10px",
    backgroundColor: "white",
    boxShadow: "0.3px 0.3px 10px rgba(123, 123, 123, 0.21)",
    color: "#082A45",
  },
  swiperSlide: {
    display: "flex",
    justifyContent: "center",
    width: "40%",
    padding: "25px 8px 10px",
  },
  cardMain: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    width: "100%",
    boxShadow: "0.3px 0.3px 10px rgba(123, 123, 123, 0.4)",
  },
  img: {
    width: "100%",
  },
  prodName: {
    fontWeight: 600,
    fontSize: "16px",
  },
  weight: {
    fontSize: "18px",
    color: "#6B7280",
  },
  price: {
    color: "#082A45",
    fontWeight: 600,
    margin: 0,
  },
};

const AddOnItems = ({ items }) => {
  return (
    <Swiper freeMode={true} slidesPerView={"auto"} spaceBetween={1} modules={[FreeMode]}>
      {items.map((item, index) => (
        <SwiperSlide key={index} style={styles.swiperSlide}>
          <div style={styles.cardMain}>
            <div style={styles.offerStar} className="d-flex justify-content-center align-items-center">
              <p>5% Off</p>
            </div>
            <div className="d-flex justify-content-center">
              <img src={item.image} alt={item.name} className="img-fluid" style={styles.img} />
            </div>
            <div>
              <p className="mb-0" style={styles.prodName}>{item.name}</p>
              <p className="mb-0" style={styles.weight}>{item.weight}</p>
              <div className="row mb-0">
                <div className="col-6">
                  <p className="price mb-0"><strike>{item.price}</strike></p>
                  <p className="off-price" style={styles.price}>{item.offPrice}</p>
                </div>
                <div className="col-6 text-end">
                  <button className="btn" style={styles.plusIconBtn}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AddOnItems;