import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleResetRequest = () => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Invalid email format");
            toast.error("Enter a valid email address!");
            return;
        }
        setError("");
        toast.success("Password reset link sent!");
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.topBar}>
                    <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
                    <h3 style={styles.title}>Reset Password</h3>
                </div>
                <div style={styles.content}>
                    <h2 style={styles.heading}>Forgot your password?</h2>
                    <p style={styles.subText}>Enter your email to receive a reset link</p>
                    <div style={styles.inputContainer}>
                        <MdEmail style={styles.icon} />
                        <input
                            type="email"
                            placeholder="Email address"
                            style={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {error && <p style={styles.errorText}>{error}</p>}
                    <button style={styles.primaryButton} onClick={handleResetRequest}>Send Reset Link</button>
                    <p style={styles.signupText}>Remembered your password? <Link to="/log-in" style={styles.signupLink}>Login</Link></p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        padding: "20px",
    },
    card: {
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
    },
    topBar: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
    },
    backIcon: {
        fontSize: "22px",
        cursor: "pointer",
    },
    title: {
        marginLeft: "15px",
        fontSize: "18px",
        marginTop: "8px",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heading: {
        fontSize: "22px",
        fontWeight: "bold",
    },
    subText: {
        fontSize: "14px",
        color: "#666",
        textAlign: "center",
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        width: "100%",
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
    errorText: {
        color: "red",
        fontSize: "12px",
        marginBottom: "5px",
    },
    primaryButton: {
        width: "100%",
        backgroundColor: "#082A45",
        color: "#ffffff",
        padding: "12px 0",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
        fontSize: "16px",
    },
    signupText: {
        fontSize: "13px",
        marginTop: "15px",
        color: "#777",
        textAlign: "center",
    },
    signupLink: {
        color: "#000",
        fontWeight: "bold",
        textDecoration: "none",
    },
};
