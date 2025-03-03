import React from 'react'
import { useState } from "react";
import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function CartItems  ({ cartItems, setCartItems })  {
    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );
    const [selectedWeights, setSelectedWeights] = useState(
        cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.availableWeights[0] }), {})
    );

    const updateQuantity = (id, change) => {
        setQuantities((prev) => {
            const newQuantity = Math.max(0, prev[id] + change);
            if (newQuantity === 0) removeItem(id);
            return { ...prev, [id]: newQuantity };
        });
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const handleWeightChange = (id, weight) => {
        setSelectedWeights((prev) => ({ ...prev, [id]: weight }));
    };

    return (
        <div style={styles.container}>
            {cartItems.map((item) => {
                const selectedPrice = item.pricing.find(p => p.weight === selectedWeights[item.id]);
                return (
                    <div key={item.id} style={styles.item}>
                        <div className="d-flex w-100 flex-column align-items-start justify-content-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={item.image} alt={item.name} style={styles.image} />
                                <div style={styles.details}>
                                    <div style={styles.name}>{item.name}</div>
                                    <p style={styles.price}>
                                        <span style={styles.discountPrice}>{selectedPrice.price}</span>
                                        <del>{selectedPrice.originalRate}</del>
                                    </p>
                                </div>
                            </div>
                            <select
                                style={styles.select}
                                value={selectedWeights[item.id]}
                                onChange={(e) => handleWeightChange(item.id, e.target.value)}
                            >
                                {item.availableWeights.map((weight) => (
                                    <option key={weight} value={weight}>{weight}</option>
                                ))}
                            </select>
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-center">
                            <button style={styles.removeButton} onClick={() => removeItem(item.id)}>
                                <IoClose />
                            </button>
                            <div style={styles.quantityContainer}>
                                <button style={{ ...styles.button, borderRadius: "8px 0 0 8px" }} onClick={() => updateQuantity(item.id, -1)}>
                                    <FaMinus />
                                </button>
                                <span style={styles.quantity}>{quantities[item.id]}</span>
                                <button style={{ ...styles.button, borderRadius: "0 8px 8px 0" }} onClick={() => updateQuantity(item.id, 1)}>
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const styles = {
    container: {
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "3px"
    },
    item: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
        padding: "13px 15px",
        borderBottom: "1px solid #ddd"
    },
    image: {
        borderRadius: "8px",
        width: "60px",
        height: "60px",
        marginBottom: "8px"
    },
    details: {
        flexGrow: 1,
        marginLeft: "12px"
    },
    name: {
        fontSize: "16px",
        fontWeight: "bold"
    },
    price: {
        fontSize: "14px",
        color: "#555",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        margin: "0"
    },
    discountPrice: {
        fontSize: "16px",
        fontWeight: "bold"
    },
    select: {
        padding: "4px 10px",
        fontSize: "14px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        fontWeight: "500",
        color: "#0A2540"
    },
    quantityContainer:
    {
        display: "flex",
        alignItems: "center"
    },
    button: {
        background: "#0A2540",
        color: "white",
        padding: "8px 12px",
        fontSize: "14px",
        border: "none",
        cursor: "pointer"
    },
    quantity: {
        margin: "0 8px",
        fontSize: "16px",
        width: "20px",
        textAlign: "center"
    },
    removeButton: {
        background: "none",
        border: "none",
        fontSize: "25px",
        cursor: "pointer",
        color: "#999",
        paddingTop: "8px"
    },
};
