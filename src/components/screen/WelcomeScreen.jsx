import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase";

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

export default function WelcomeScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.topBar}>
          <Link to="/" style={styles.backButton}>
            <FaArrowLeft style={styles.backIcon} />
          </Link>

        </div>
        <div style={styles.logoContainer}>
          <img src="/expento_logo.svg" alt="Brand Logo" style={styles.logo} />
        </div>
        <div style={styles.contentContainer}>
          <h2 style={styles.heading}>Welcome</h2>
          <p style={styles.subText}>
            Discover endless styles, from timeless classics to the latest trends.
          </p>

          <button style={styles.googleButton} onClick={handleGoogleSignIn}>
            <FcGoogle style={styles.googleIcon} /> Continue with Google
          </button>

          <Link to="/sign-up">
            <button style={styles.primaryButton}>Signup</button>
          </Link>

          <p style={styles.loginText}>
            Already have an account? <Link to="/log-in" style={styles.loginLink}>Login</Link>
          </p>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    border: "2px solid #ccc",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
  },
  content: {
    maxWidth: "500px",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "20px",
  },
  backButton: {
    textDecoration: "none",
    color: "#000",
  },
  backIcon: {
    fontSize: "24px",
  },
  title: {
    fontSize: "20px",
    marginLeft: "10px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  logo: {
    width: "120px",
    height: "120px",
    backgroundColor: "#0B2C47",
    borderRadius: "10px",
    padding: "10px",
  },
  contentContainer: {
    textAlign: "center",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subText: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "25px",
  },
  googleButton: {
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #ccc",
    padding: "14px 0",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "500",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  googleIcon: {
    fontSize: "20px",
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "#082A45",
    color: "#ffffff",
    padding: "14px 0",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "15px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  loginText: {
    fontSize: "14px",
    marginTop: "20px",
    color: "#777",
  },
  loginLink: {
    color: "#000",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
