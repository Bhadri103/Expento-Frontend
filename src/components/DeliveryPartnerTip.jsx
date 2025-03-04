import React, { useState } from "react";
import coin from "../assets/images/coin.png";

export default function DeliveryPartnerTip() {
    const [selectedTip, setSelectedTip] = useState(20);
    const tipOptions = [10, 20, 50];

    const handleTipSelect = (amount) => {
        setSelectedTip(amount);
    };

    return (
        <div style={styles.container}>
           
                <h2 style={styles.heading}>Delivery Partner Tip</h2>
                <p style={styles.subText}>The entire amount will be sent to your delivery partner.</p>
           
            <div style={styles.buttonContainer}>
                {tipOptions.map((tip) => (
                    <button
                        key={tip}
                        onClick={() => handleTipSelect(tip)}
                        style={
                            selectedTip === tip
                                ? { ...styles.button(tip), ...styles.selectedButton }
                                : styles.button(tip)
                        }
                    >
                        <div className="d-flex align-items-center position-relative">
                            <div style={styles.coinContainer}>
                                <div className="position-relative d-flex align-items-center px-1 ">
                                    {[...Array(tip === 50 ? 3 : tip === 20 ? 2 : 1)].map((_, index) => (
                                        <img key={index} src={coin} alt="coin" style={styles.coin(index)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        ₹{tip}
                    </button>
                ))}
                <button
                    onClick={() => handleTipSelect(null)}
                    style={
                        selectedTip === null
                            ? { ...styles.button(10), ...styles.selectedButton }
                            : styles.button(10)
                    }
                >
                    Custom
                </button>
            </div>
        </div>
    );
}



const styles = {
    container: {
        padding: "16px 10px",
       marginBottom: "10px",
       marginTop: "10px",
        backgroundColor: "white",

        boxShadow: "0.3px 0.3px 10px rgba(123, 123, 123, 0.4)",
       width:"100%",
        margin: "auto",
    },
    heading: {
        fontSize: "18px",
        fontWeight: "600",
    },
    subText: {
        color: "#6b7280",
        fontSize: "14px",
        marginBottom: "12px",
    },
    button: (tip) => ({
        display: "flex",

        alignItems: "center",
        gap: "8px",
        outLine: "none",
        padding: "8px 16px",
        border: "1px solid #d1d5db ",
        borderRadius: "24px",
        cursor: "pointer",
        position: "relative",
        width: "fit-content",
    }),
    selectedButton: {
        borderColor: "#3b82f6",
        backgroundColor: "#dbeafe",
    },
    buttonContainer: {
        display: "flex",
        gap: "12px",
        overflowX: "auto",
        paddingBottom: "8px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    coinContainer: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginRight: "8px",
    },
    coin: (index) => ({
        width: "20px",
        height: "20px",
        position: "absolute",
        left: `${index * -7}px`,
        zIndex: `${10 - index}`,
    }),
};
