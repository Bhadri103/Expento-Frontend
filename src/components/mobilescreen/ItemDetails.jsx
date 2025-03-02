import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { categories } from "../../constants/category";
import category4 from "../../assets/images/category/beauty.jpg";
import Items from "../screen/SubCategories";
import SimilarProduct from "../ui/SimilarProduct";
import MobileBottomNav from "./MobileBottomNav";


const dummyItems = [
    {
        id: "1",
        name: "Fresh Tomatoes",
        image: "https://via.placeholder.com/150",
        pricing: [
            { weight: "1kg", price: "₹40", originalRate: "₹50", discount: "20% off" },
        ],
    },
    {
        id: "2",
        name: "Organic Apples",
        image: "https://via.placeholder.com/150",
        pricing: [
            { weight: "1kg", price: "₹80", originalRate: "₹100", discount: "20% off" },
        ],
    },
    {
        id: "3",
        name: "Bananas",
        image: "https://via.placeholder.com/150",
        pricing: [
            { weight: "1kg", price: "₹30", originalRate: "₹40", discount: "25% off" },
        ],
    },
    {
        id: "4",
        name: "Carrots",
        image: "https://via.placeholder.com/150",
        pricing: [
            { weight: "1kg", price: "₹20", originalRate: "₹25", discount: "20% off" },
        ],
    },
    {
        id: "5",
        name: "Spinach",
        image: "https://via.placeholder.com/150",
        pricing: [
            { weight: "1kg", price: "₹15", originalRate: "₹20", discount: "25% off" },
        ],
    },
];

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showMore, setShowMore] = useState(false);





    useEffect(() => {
        let foundItem = null;
        categories.forEach((category) => {
            category.subCategories.forEach((subCategory) => {
                const matchedItem = subCategory.items?.find(
                    (item) => item.id.toString() === itemId
                );
                if (matchedItem) foundItem = matchedItem;
            });
        });

        if (foundItem) {
            setItem(foundItem);
            setSelectedOption(foundItem.pricing[0]);
        }
    }, [itemId]);

    if (!item) return <p>Item not found.</p>;

    return (
        <div style={styles.container}>
            <div style={styles.topBar}>
                <div style={styles.backButton}>
                    <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
                </div>
                <h3 style={styles.title}>{item.name}</h3>
            </div>

            <div style={styles.imageContainer}>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop={true}
                    style={{ width: "70%", maxWidth: "300px" }}
                    className="custom-swiper"
                >
                    {[...Array(4)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.image} alt={`Slide ${index + 1}`} style={styles.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div style={styles.pricingContainer}>
                <div className="p-3">
                    <h3 style={styles.productTitle}>{item.name}</h3>

                    <div style={styles.optionsContainer}>
                        {item.pricing.map((option, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.optionBox,
                                    background: option === selectedOption ? "#C2D9FF" : "#fff",
                                    border: option === selectedOption ? "1px solid #C2D9FF" : "1px solid #ccc",
                                }}
                                onClick={() => setSelectedOption(option)}
                            >
                                <span style={styles.weight}>{option.weight}</span>
                                <span style={styles.price}>{option.price}</span>
                                <span style={styles.per100g}>
                                    ₹{(parseInt(option.price.replace("₹", "")) / parseInt(option.weight)).toFixed(2)} / 100 gms
                                </span>
                                <div style={styles.discountBadge}>
                                    <p style={styles.discountText}>{option.discount}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={styles.bottomRow}>
                        <div className="d-flex gap-2 align-items-center">
                            <span style={styles.finalPrice}>{selectedOption?.price}</span>
                            <span style={styles.strikePrice}>{selectedOption?.originalRate}</span>
                            <span style={styles.discount}>{selectedOption?.discount}</span>
                        </div>
                        <button style={styles.addButton}>ADD</button>
                    </div>
                </div>
                <div style={styles.savingsBanner}>
                    Save ₹{(parseInt(selectedOption?.originalRate.replace("₹", "")) - parseInt(selectedOption?.price.replace("₹", ""))).toFixed(2)} with this offer!
                </div>
            </div>

            <div style={styles.highlightsContainer}>
                <h4 style={styles.highlightsTitle}>Highlights</h4>
                <div style={styles.highlightsContent}>
                    <div style={styles.highlightItem}>
                        <span style={styles.highlightLabel}>Product Type</span>
                        <span style={styles.highlightValue}>{item.productType}</span>
                    </div>
                    <div style={styles.highlightItem}>
                        <span style={styles.highlightLabel}>Weight</span>
                        <span style={styles.highlightValue}>{item.availableWeights[0]}</span>
                    </div>
                    <div style={styles.highlightItem}>
                        <span style={styles.highlightLabel}>Regions</span>
                        <span style={styles.highlightValue}>{item.region}</span>
                    </div>
                    {showMore && (
                        <>
                            <div style={styles.highlightItem}>
                                <span style={styles.highlightLabel}>About The Product</span>
                                <span style={styles.highlightValue}>{item.about}</span>
                            </div>
                        </>
                    )}
                    <div style={styles.highlightItem}>
                        <span style={styles.highlightLabel}></span>
                        <span style={styles.highlightValue}> <div style={styles.viewLess} onClick={() => setShowMore(!showMore)}>
                            {showMore ? (
                                <span style={styles.viewLessText}>
                                    View less <FaChevronUp style={{ marginLeft: "5px" }} />
                                </span>
                            ) : (
                                <span style={styles.viewLessText}>
                                    View more <FaChevronDown style={{ marginLeft: "5px" }} />
                                </span>
                            )}
                        </div></span>
                    </div>

                </div>




                <h4 style={styles.informationTitle}>Information</h4>
                <div style={styles.informationContent}>
                    <div style={styles.infoItem}>
                        <span style={styles.infoLabel}>Disclaimer</span>
                        <span style={styles.infoValue}>{item.disclaimer}</span>
                    </div>
                    <div style={styles.infoItem}>
                        <span style={styles.infoLabel}>Shelf Life</span>
                        <span style={styles.infoValue}>{item.shelfLife}</span>
                    </div>
                </div>

            </div>
            <SimilarProduct />
         
        </div>

    );
};

const styles = {
    container: {
        height: "100vh",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        left: "15px",
        textDecoration: "none",
    },
    backIcon: {
        fontSize: "22px",
        cursor: "pointer",
        color: "#000",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: "0 auto",
    },
    topBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "20px 15px",
        background: "#fff",
        zIndex: 10,
        position: "sticky",
        top: 0,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100%",
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        width: "100%",
    },
    image: {
        width: "100%",
        objectFit: "cover",
        borderRadius: "10px",
    },
    pricingContainer: {
        marginTop: "20px",
        width: "95%",
        maxWidth: "400px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        background: "#fff",
    },
    productTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    optionsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "10px",
        marginBottom: "15px",
    },
    optionBox: {
        padding: "10px",
        borderRadius: "10px",
        width: "calc(50% - 5px)",
        textAlign: "left",
        position: "relative",
        boxSizing: "border-box",
        cursor: "pointer",
    },
    weight: {
        display: "block",
        fontSize: "14px",
        fontWeight: "bold",
    },
    price: {
        display: "block",
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "5px",
    },
    per100g: {
        fontSize: "10px",
        color: "#555",
    },
    discountBadge: {
        position: "absolute",
        top: "-15px",
        right: "-15px",
        width: "55px",
        height: "55px",
        backgroundImage: `url('/assets/star.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    discountText: {
        fontSize: "9px",
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        margin: "0 auto",
        lineHeight: "10px",
        whiteSpace: "normal",
        wordBreak: "break-word",
        width: "40%",
    },
    bottomRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
    },
    finalPrice: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#08324D",
    },
    strikePrice: {
        textDecoration: "line-through",
        color: "#999",
        marginLeft: "5px",
        fontSize: "14px",
        fontWeight: "normal",
    },
    discount: {
        color: "#08324D",
        fontWeight: "bold",
        fontSize: "14px",
    },
    addButton: {
        background: "#08324D",
        color: "#fff",
        border: "none",
        padding: "8px 15px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    savingsBanner: {
        marginTop: "10px",
        background: "#6FB0E8",
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        borderRadius: "0 0 5px 5px",
        color: "#fff",
    },
    highlightsContainer: {
        marginTop: "20px",
        width: "95%",
        maxWidth: "400px",
        padding: "15px",
        background: "#fff",
        borderRadius: "10px",
        border: "1px solid #ccc",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    highlightsTitle: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    highlightsContent: {
        marginBottom: "10px",
    },
    highlightItem: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
    },
    highlightLabel: {
        fontSize: "14px",
        color: "#555",
        width: "100px",
        flexShrink: 0,
    },
    highlightValue: {
        fontSize: "14px",
        color: "#000",
        fontWeight: "bold",
        flex: 1,
        marginLeft: "10px",
    },
    viewLess: {
        textAlign: "right",
        cursor: "pointer",
        border: "1px solid #08324D",
        padding: "5px 10px",
        borderRadius: "50px",
        width: "fit-content",
    },
    viewLessText: {
        fontSize: "12px",
        color: "#08324D",
        display: "flex",
        alignItems: "center",
    },
    informationContainer: {
        marginTop: "30px",
        width: "95%",
        maxWidth: "400px",
        padding: "15px",
        background: "#fff",
        borderRadius: "10px",
        border: "1px solid #ccc",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    informationTitle: {
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "15px",
        marginBottom: "10px",
    },
    informationContent: {
        marginBottom: "10px",
    },
    infoItem: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
    },
    infoLabel: {
        fontSize: "14px",
        color: "#555",
        width: "100px",
        flexShrink: 0,
    },
    infoValue: {
        fontSize: "14px",
        color: "#000",
        fontWeight: "bold",
        flex: 1,
        marginLeft: "10px",
    },
};

document.head.appendChild(document.createElement("style")).innerHTML = `
    .custom-swiper .swiper-pagination-bullet {
        background: rgb(8, 42, 69) !important;
        opacity: 0.5;
    }
    .custom-swiper .swiper-pagination-bullet-active {
        opacity: 1;
    }
`;

export default ItemDetails;