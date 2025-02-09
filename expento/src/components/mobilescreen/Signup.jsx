import React from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdPhone, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <div style={styles.container}>

                <div style={styles.topBar}>
                    <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
                    <h3 style={styles.title}>Welcome</h3>
                </div>


                <div style={styles.imageContainer}>
                    <img src="/assets/signup_img.png" alt="Welcome" style={styles.image} />
                    <div style={styles.imageOverlay}></div>
                </div>


                <div style={styles.content}>
                    <h2 style={styles.heading}>Create account</h2>
                    <p style={styles.subText}>Quickly create an account</p>

                    <div style={styles.inputContainer}>
                        <MdEmail style={styles.icon} />
                        <input type="email" placeholder="Email address" style={styles.input} />
                    </div>

                    <div style={styles.inputContainer}>
                        <MdPhone style={styles.icon} />
                        <input type="text" placeholder="Phone number" style={styles.input} />
                    </div>

                    <div style={styles.inputContainer}>
                        <MdLock style={styles.icon} />
                        <input type="password" placeholder="Password" style={styles.input} />
                        <FaEyeSlash style={styles.eyeIcon} />
                    </div>

                    <button style={styles.primaryButton}>Signup</button>

                    <p style={styles.loginText}>
                        Already have an account?
                        <Link to="/login" style={styles.loginLink}>Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
    },
    topBar: {
        position: "absolute",
        top: "25px",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        zIndex: 10,
        width: "100%",
    },
    backIcon: {
        fontSize: "22px",
        cursor: "pointer",
        color: "#fff",
        position: "absolute",
        left: "15px",
    },
    title: {
        color: "#fff",
        fontSize: "18px",
        fontWeight: "normal",
        margin: "0",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "60vh",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    imageOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100px",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)",
    },
    content: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: "30px 25px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
    },
    heading: {
        fontSize: "22px",
        fontWeight: "bold",
        marginBottom: "5px",
        textAlign: "left",
    },
    subText: {
        fontSize: "14px",
        color: "#666",
        marginBottom: "20px",
        textAlign: "left",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
    },
    input: {
        flex: 1,
        border: "none",
        outline: "none",
        fontSize: "14px",
    },
    icon: {
        fontSize: "20px",
        color: "#666",
        marginRight: "10px",
    },
    eyeIcon: {
        fontSize: "20px",
        color: "#666",
        cursor: "pointer",
    },
    primaryButton: {
        width: "100%",
        backgroundColor: "#082A45",
        color: "#ffffff",
        padding: "12px 0",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "10px",
    },
    loginText: {
        fontSize: "13px",
        marginTop: "15px",
        color: "#777",
        textAlign: "center",
    },
    loginLink: {
        color: "#000",
        fontWeight: "bold",
        textDecoration: "none",
    },
};
