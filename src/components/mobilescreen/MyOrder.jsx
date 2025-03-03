import React, { useState } from "react";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const orders = [
    {
        id: "#90897",
        date: "October 19 2021",
        items: 10,
        price: "$16.90",
        status: {
            placed: "Oct 19 2021",
            confirmed: "Oct 20 2021",
            shipped: "Oct 20 2021",
            outForDelivery: "pending",
            delivered: "pending",
        },
    },
    {
        id: "#90897",
        date: "October 19 2021",
        items: 10,
        price: "$16.90",
        status: {
            placed: "Aug 28 2021",
            confirmed: "Aug 29 2021",
            shipped: "Aug 29 2021",
            outForDelivery: "Aug 29 2021",
            delivered: "Aug 29 2021",
        },
    },
];


export default function MyOrder() {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(null);

    return (
        <div style={styles.Container}>
            <div style={styles.header}>
                <FaArrowLeft style={styles.backButton} onClick={() => navigate(-1)} />
                <span style={styles.headerTitle}>My Orders</span>
            </div>
            <div style={{ padding: "15px"}}>
            {orders.map((order, index) => (
                <div key={index} style={styles.orderContainer}>
                    <div
                        style={styles.orderHeader}
                        onClick={() => setExpanded(expanded === index ? null : index)}
                    >
                        <div style={styles.orderInfo}>
                            <div style={styles.orderIcon}>
                                <img src="/Order.svg" alt="Order" width="40" height="40" />
                            </div>
                            <div>
                                <h6 style={styles.orderDetails}>Order {order.id}</h6>
                                <p style={styles.orderDate}>Placed on {order.date}</p>
                                <p style={styles.orderItems}>Items: {order.items} | Price: {order.price}</p>
                            </div>
                        </div>
                        {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {expanded === index && (
                        <div style={styles.timeline}>
                            {Object.entries(order.status).map(([key, value], i, arr) => (
                                <div key={key} style={styles.timelineItem}>
                                    <div style={styles.timelineLine(i === arr.length - 1)}></div>
                                    <div style={styles.timelineDot(value !== "pending")}></div>
                                    <div style={{ marginLeft: "12px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <span style={styles.statusText(value !== "pending")}>
                                            {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                                        </span>
                                        <span style={styles.statusDate}>{value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            </div>
        </div>
    );
}



const styles = {
    Container: {
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
  
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    backButton: {
        fontSize: "1.25rem",
        marginRight: "12px",
        cursor: "pointer",
    },
    headerTitle: {
        flexGrow: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.25rem",
    },
    orderContainer: {
        backgroundColor: "white",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    orderHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
    },
    orderInfo: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    orderIcon: {
        backgroundColor: "#082A45",
        padding: "10px",
        borderRadius: "50%",
    },
    orderDetails: {
        fontWeight: "bold",
        margin: 0,
    },
    orderDate: {
        fontWeight: 400,
        color: "#6c757d",
        margin: "4px 0",
    },
    orderItems: {
        fontWeight: 400,
        margin: 0,
    },
    timeline: {
        position: "relative",
        marginTop: "12px",
    },
    timelineItem: {
        display: "flex",
        alignItems: "center",
    },
    timelineLine: (isLast) => ({
        width: "1px",
        height: isLast ? "20px" : "30px",
        backgroundColor: "#87848A",
        marginLeft: "5px",
    }),
    timelineDot: (isCompleted) => ({
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: isCompleted ? "#082A45" : "white",
        border: "2px solid #082A45",
        marginLeft: "-6px",
    }),
    statusText: (isCompleted) => ({
        fontWeight: isCompleted ? "bold" : "normal",
        color: isCompleted ? "#000" : "#6c757d",
    }),
    statusDate: {
        fontWeight: 400,
        color: "#6c757d",
    },
};
