import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Welcome() {
  return (
    <>

    <div style={styles.container}>

      <div style={styles.topBar}>
        <FaArrowLeft style={styles.backIcon} />
        <h3 style={styles.title}>Welcome</h3>
      </div>


      <div style={styles.imageContainer}>
        <img src="/assets/welcome_img.png" alt="Welcome" style={styles.image} />
        <div style={styles.imageOverlay}></div>
      </div>



      <div style={styles.content}>
        <h2 style={styles.heading}>Welcome</h2>
        <p style={styles.subText}>
          Discover endless styles, from timeless classics to the latest trends
        </p>


        <button style={styles.googleButton}>
          <FcGoogle style={styles.googleIcon} /> Continue with Google
        </button>


        <button style={styles.primaryButton}>Signup</button>


        <p style={styles.loginText}>
          Already have an account? <a href="/login" style={styles.loginLink}>Login</a>
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
    margin: "0"

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
  googleButton: {
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #ccc",
    padding: "12px 0",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "14px",
    fontWeight: "500",
  },
  googleIcon: {
    fontSize: "18px",
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
