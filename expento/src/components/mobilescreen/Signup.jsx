import React, { useState } from "react";
import { FaArrowLeft, FaEyeSlash, FaEye } from "react-icons/fa";
import { MdEmail, MdPhone, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", phone: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);


    const validateForm = () => {
        let newErrors = { email: "", phone: "", password: "" };
        let valid = true;


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format";
            valid = false;
        }


        if (!/^\d{10}$/.test(phone)) {
            newErrors.phone = "Phone number must be 10 digits";
            valid = false;
        }


        if (!/^[A-Za-z0-9]{8,}$/.test(password)) {
            newErrors.password = "Password must be at least 8 characters (a-z, 0-9)";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSignup = () => {
        if (!validateForm()) {
            toast.error("Oops! Please fix the errors.");
            return;
        }

        toast.success("Signup successful!");
    };


    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <div style={styles.topBar}>
                    <FaArrowLeft style={styles.backIcon} onClick={() => window.history.back()} />
                    <h3 style={styles.title}>Welcome</h3>
                </div>


                <LazyLoadImage src="/assets/signup_img.png" alt="Welcome" effect="opacity" style={styles.image} />
                <div style={styles.imageOverlay}></div>
            </div>

            <div style={styles.content}>
                <div style={styles.contentcontainer}>
                    <h2 style={styles.heading}>Create account</h2>
                    <p style={styles.subText}>Quickly create an account</p>


                    <div style={{ ...styles.inputContainer, borderColor: errors.email ? "red" : "#ccc" }}>
                        <MdEmail style={styles.icon} />

                        <input
                            type="email"
                            placeholder="Email address"
                            style={styles.input}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                                    setErrors((prev) => ({ ...prev, email: "" }));
                                }
                            }}
                        />

                    </div>
                    {errors.email && <p style={styles.errorText}>{errors.email}</p>}


                    <div style={{ ...styles.inputContainer, borderColor: errors.phone ? "red" : "#ccc" }}>
                        <MdPhone style={styles.icon} />

                        <input
                            type="text"
                            placeholder="Phone number"
                            style={styles.input}
                            value={phone}
                            onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                if (/^\d{10}$/.test(e.target.value)) {
                                    setErrors((prev) => ({ ...prev, phone: "" }));
                                }
                            }}
                        />

                    </div>
                    {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}

                    <div style={{ ...styles.inputContainer, borderColor: errors.password ? "red" : "#ccc" }}>
                        <MdLock style={styles.icon} />

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            style={styles.input}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (/^[A-Za-z0-9]{8,}$/.test(e.target.value)) {
                                    setErrors((prev) => ({ ...prev, password: "" }));
                                }
                            }}
                        />


                        {showPassword ? (
                            <FaEye style={styles.eyeIcon} onClick={() => setShowPassword(false)} />
                        ) : (
                            <FaEyeSlash style={styles.eyeIcon} onClick={() => setShowPassword(true)} />
                        )}
                    </div>
                    {errors.password && <p style={styles.errorText}>{errors.password}</p>}


                    <button style={styles.primaryButton} onClick={handleSignup}>Signup</button>


                    <p style={styles.loginText}>
                        Already have an account?
                        <Link to="/log-in" style={styles.loginLink}> Login</Link>
                    </p>
                </div>  </div>
        </div>
    );
}


const styles = {
    container: {
        height: "100vh",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden"
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
        width: "100%"
    },
    backIcon: { fontSize: "22px", cursor: "pointer", color: "#fff", position: "absolute", left: "15px" },
    title: { color: "#fff", fontSize: "18px", fontWeight: "normal", margin: "0" },
    imageContainer: { position: "relative", width: "100%", height: "60vh", overflow: "hidden" },
    image: { width: "100%", height: "100%", objectFit: "cover" },
    imageOverlay: { position: "absolute", top: 0, left: 0, width: "100%", height: "100px", background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)" },
    content: {
        width: "100%",
        backgroundColor: "#fff",
        padding: "30px 25px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        bottom: 0,
        position: "absolute",
    },
    contentcontainer: {
        maxWidth: "400px",
        width: "100%",
    },
    heading: { fontSize: "22px", fontWeight: "bold", marginBottom: "5px", textAlign: "left" },
    subText: { fontSize: "14px", color: "#666", marginBottom: "20px", textAlign: "left" },
    inputContainer: { display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", marginBottom: "5px" },
    input: { flex: 1, border: "none", outline: "none", fontSize: "14px" },
    icon: { fontSize: "20px", color: "#666", marginRight: "10px" },
    eyeIcon: { fontSize: "20px", color: "#666", cursor: "pointer" },
    errorText: {
        color: "red", fontSize:
            "12px", marginBottom: "5px"
    },
    primaryButton: {
        width: "100%",
        backgroundColor: "#082A45", color: "#ffffff",
        padding: "12px 0",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "10px"
    },
    loginText: {
        fontSize: "13px",
        marginTop: "15px",
        color: "#777",
        textAlign: "center"
    },
    loginLink: {
        color: "#000",
        fontWeight: "bold",
        textDecoration: "none"
    }
};

