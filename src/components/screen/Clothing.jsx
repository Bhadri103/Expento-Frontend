import React, { useState } from "react";
import { FaSearch, FaCamera, FaMicrophone, FaSlidersH, FaPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import ProductCards from "../ProductCards";
import { Link } from "react-router-dom";


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


export default function Clothing() {
    return (
        <div>
            <TopBar />
            <CategorySwiper />
            <Ad />
            <FilterBar />
            <ProductCards products={products} />
        </div>
    );
}

const TopBar = () => {
    return (
        <div style={styles.topBar}>
            <div style={styles.searchSection}>
                <div style={styles.searchLine}>
                    <FaSearch style={styles.searchIcon} />
                    <input type="text" placeholder="Search" style={styles.input} />
                </div>
                <div style={styles.iconsContainer}>
                    <FaCamera style={styles.icon} />
                    <FaMicrophone style={styles.icon} />
                </div>
            </div>
            <div style={styles.filterButton}>
                <FaSlidersH style={styles.filterIcon} />
            </div>
        </div>
    );
};


const CategorySwiper = () => {
    const categories = [
        { label: "MEN", image: "/mens.png" },
        { label: "WOMEN", image: "/womens.png" },
        { label: "KIDS", image: "/kids.png" },
        { label: "ACCESSORIES", image: "/accessories.png" },
        { label: "BEAUTY", image: "/accessories.png" },
    ];

    return (
        <Swiper
            spaceBetween={30}
            freeMode={true}
            slidesPerView={4}
            breakpoints={{ 1024: { slidesPerView: 6 } }}
            modules={[FreeMode]}
            style={styles.swiperContainer}
        >
            {categories.map((category, index) => (
                <SwiperSlide key={index} style={styles.categoryItem}>
                    <Link to="/clothing-category" style={{ textDecoration: "none", color: "inherit" }}>
                        <img src={category.image} alt={category.label} style={styles.categoryImage} />
                        <div style={styles.categoryLabel}>{category.label}</div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const Ad = () => {
    return (
        <div style={styles.addContainer}>
            <img src="/assets/rectangle.jpg" alt="" style={styles.addImage} />
            <img src="/assets/rectangle2.jpg" alt="" style={styles.addImage} />
            <img src="/assets/image.jpg" alt="" />
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
    topBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    searchSection: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
    },
    searchLine: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
    },
    searchIcon: {
        color: "#777",
        fontSize: "22px",
        marginRight: "8px",
    },
    input: {
        border: "none",
        outline: "none",
        fontSize: "16px",
        width: "100%",
    },
    iconsContainer: {
        display: "flex",
        gap: "12px",
        marginLeft: "10px",
    },
    icon: {
        color: "#777",
        fontSize: "20px",
        cursor: "pointer",
    },
    filterButton: {
        backgroundColor: "#0C2D4A",
        padding: "12px",
        borderRadius: "8px",
        marginLeft: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    filterIcon: {
        color: "#fff",
        fontSize: "22px",
    },
    swiperContainer: {
        marginTop: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "0px",
        paddingTop: "0px",
    },
    categoryItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "auto",
        padding:"0px"
    
    },
    categoryImage: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        objectFit: "cover",
    },
    categoryLabel: {
        marginTop: "10px",
        fontSize: "16px",
        fontWeight: "bold",
    },
    addContainer: {
        marginTop: "15px",
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
