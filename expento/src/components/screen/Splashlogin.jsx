import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SplashScreen() {
    const slides = [
        {
            image: "/assets/markus_spiske_splash1.png",
            title: "Welcome",
            description: "The best delivery app in town for delivering your daily fresh groceries",
        },
        {
            image: "/assets/element5_digital_splash2.png",
            title: "Premium Food\nAt Your Doorstep",
            description: "The best delivery app in town for delivering your daily fresh groceries",
        },
        {
            image: "/assets/element5_digital_splash3.png",
            title: "Buy Premium\nQuality Fruits",
            description: "The best delivery app in town for delivering your daily fresh groceries",
        },
        {
            image: "/assets/element5_digital_splash4.png",
            title: "Buy Quality\nDairy Products",
            description: "The best delivery app in town for delivering your daily fresh groceries",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 1400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.container}>
            {/* First Slide Title & Description (Rendered Outside Content) */}
            {currentSlide === 0 && (
                <>
                    <h2 style={styles.firsttitle}>{slides[currentSlide].title}</h2>
                    <p style={styles.firstdescription}>{slides[currentSlide].description}</p>
                </>
            )}

            {/* Image Section */}
            <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                style={currentSlide === 0 ? styles.firstImage : styles.image}
            />

            {/* Content Section */}
            <div style={currentSlide === 0 ? styles.firstPageContent : styles.content}>

                {currentSlide !== 0 && (
                    <>
                        <h2 style={styles.title}>{slides[currentSlide].title}</h2>
                        <p style={styles.description}>{slides[currentSlide].description}</p>
                    </>
                )}

                {/* Pagination Dots */}
                <div style={styles.pagination}>
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            style={{
                                ...styles.dot,
                                backgroundColor: index === currentSlide ? "#082A45" : "#ccc",
                            }}
                        />
                    ))}
                </div>
                <button style={styles.button}>Get started</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "80vh",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        transition: "opacity 0.5s ease-in-out",
    },
    firstImage: {
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        transition: "opacity 0.5s ease-in-out",
    },
    content: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",

        backgroundColor: "#ffffff",
        borderTopLeftRadius: "90% 50%",
        borderTopRightRadius: "90% 50%",
        padding: "40px 25px",
        textAlign: "center",
    },
    firstPageContent: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "40px 25px",
        textAlign: "center",
    },
    firsttitle: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        width: "90%",
        zIndex: 10,
    },
    firstdescription: {
        fontWeight: "400",
        fontSize: "1rem",
        padding: "15px 0 20px 0",
        position: "absolute",
        top: "12%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        width: "90%",
        zIndex: 10,

    },
    title: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        whiteSpace: "pre-line",
    },
    description: {

        fontWeight: "400",
        fontSize: "1rem",
        padding: "15px 0 20px 0",
    },
    button: {
        width: "100%",
        marginTop: "15px",
        backgroundColor: "#082A45",
        color: "#ffffff",
        fontSize: "1rem",
        padding: "12px 0",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
    },
    dot: {
        width: "10px",
        height: "10px",
        margin: "0 5px",
        borderRadius: "50%",
        transition: "background-color 0.3s ease-in-out",
    },
};
