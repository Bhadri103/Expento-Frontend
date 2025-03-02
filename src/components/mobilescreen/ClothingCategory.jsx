
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import t_shirts from "../../assets/images/category/t_shirt.jpg";
import shirts from "../../assets/images/category/shirt.jpg";
import sets from "../../assets/images/category/sets.jpg";
import inner_wear from "../../assets/images/category/inner_wear.jpg";
import ethnic_wear from "../../assets/images/category/ethnic_wear.jpg";
import bottom_wear from "../../assets/images/category/bottom_wear.jpg";
import "../../styles/subCategories.css";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import ProductCards from "../ProductCards";


const Category = [

    {
        id: 1,
        category: "T-Shirts",
        image: t_shirts,
    },
    {
        id: 2,
        category: "Shirts",
        image: shirts,
    },
    {
        id: 3,
        category: "Sets",
        image: sets,
    },
    {
        id: 4,
        category: "Inner Wear",
        image: inner_wear,
    },
    {
        id: 5,
        category: "Ethnic Wear",
        image: ethnic_wear,
    },
    {
        id: 6,
        category: "Bottom Wear",
        image: bottom_wear,
    }

]

const products = [
    {
        id: 1,
        name: "Hooded Puffer Jacket",
        description: "Trond Men's Regular Fit",
        image: require("../../images/products/img-8.png"),
        price: 4999,
        originalPrice: 5000,
        discount: "18% Off",
        rating: 5.0,
    },
    {
        id: 2,
        name: "Winter Jacket",
        description: "Warm and cozy",
        image: require("../../images/products/img-9.png"),
        price: 3999,
        originalPrice: 4500,
        discount: "12% Off",
        rating: 4.5,
    },
    {
        id: 3,
        name: "Hooded Puffer Jacket",
        description: "Trond Men's Regular Fit",
        image: require("../../images/products/img-8.png"),
        price: 4999,
        originalPrice: 5000,
        discount: "18% Off",
        rating: 5.0,
    },
    {
        id: 4,
        name: "Winter Jacket",
        description: "Warm and cozy",
        image: require("../../images/products/img-9.png"),
        price: 3999,
        originalPrice: 4500,
        discount: "12% Off",
        rating: 4.5,
    },

];

export default function ClothingCategory() {

    return (
        <>
            <TopBar />
            <CategoryGrid />
            <Ad />
            <FilterBar />
            <ProductCards products={products} />
        </>
    )
}

const TopBar = () => {
    const [isSearching, setIsSearching] = useState(false);
    const navigate = useNavigate();

    return (
        <div id="topBar" className="top-bar">
            <FaArrowLeft className="icon" onClick={() => navigate(-1)} />

            {isSearching ? (
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    autoFocus
                    onBlur={() => setIsSearching(false)}
                />
            ) : (
                <span className="title">Mens</span>
            )}

            <FaSearch className="icon" onClick={() => setIsSearching(true)} />
        </div>
    )
};




const CategoryGrid = () => {
    const navigate = useNavigate();
    return (
        <div className="p-2">


            <div className="container" style={styles.container}>
                <div className="row g-3">
                    {Category.map((item) => (
                        <div key={item.id} className="col-4"   onClick={() => navigate("/product-list")}>
                            <div className="" style={styles.card}>
                                <img src={item.image} alt={item.category} style={styles.img} />
                                <p style={styles.text}>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Ad = () => {
    return (
        <div style={styles.addContainer}>
            <img src="/products/ad.jpg" alt="" style={styles.addImage} />

        </div>
    );
}


const FilterBar = () => {
    // Dummy data for categories (replace with API data later)
    const categories = [
        "Jackets", "Jeans", "Shoes", "Shirts", "T-Shirts", "Hoodies", "Sweaters", "Accessories"
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");


    const sortedCategories = ["All", ...categories];

    return (
        <div style={styles.filterContainer}>
            <Swiper
                spaceBetween={10}
                freeMode={true}
                slidesPerView={"auto"} 
              
                modules={[FreeMode]}
                style={styles.swiper}
            >
                {sortedCategories.map((category, index) => (
                    <SwiperSlide key={index} style={styles.swiperSlide}>
                        <button
                            onClick={() => setSelectedCategory(category)}
                            style={
                                selectedCategory === category
                                    ? { ...styles.categoryButton, ...styles.activeButton }
                                    : styles.categoryButton
                            }
                        >
                            {category}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


const styles = {
    container: {
        backgroundColor: "#0a2940",
        padding: "15px 20px",


        margin: "auto",
    },
    card: {

        backgroundColor: "transparent",

        textAlign: "center",

    },
    img: {
        width: "100%",

        borderRadius: "8px",
        objectFit: "cover",
    },
    text: {
        color: "white",
        marginTop: "10px",
        fontSize: "12px",
    },
    addContainer: {
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "8px",
        overflow: "hidden",
        gap: "8px",
    },
    addImage: {
        width: "100%",
        height: "auto",
    },
    filterContainer: {
        marginTop: "15px",
        marginBottom: "15px",
        padding: "8px 0",
        overflow: "hidden",
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
    },
    swiper: {
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "0px",
        paddingBottom: "0px",
    },
    swiperSlide: {
        width: "auto", 
        padding: "0px" 
    },
    categoryButton: {
        padding: "10px 20px",
        border: "none",
        borderRadius: "20px",
        backgroundColor: "#f0f0f0",
        color: "#333",
        fontSize: "14px",
        cursor: "pointer",
        transition: "0.3s",
        whiteSpace: "nowrap",
    },
    activeButton: {
        backgroundColor: "#0C2D4A",
        color: "#fff",
        fontWeight: "bold",
    }
};