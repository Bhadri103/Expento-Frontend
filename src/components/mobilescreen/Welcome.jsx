import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { auth, provider, signInWithPopup } from "../../firebase";



const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};


export default function Welcome() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <div style={styles.topBar}>
          <Link to="/" style={styles.backButton}>
            <FaArrowLeft style={styles.backIcon} />
          </Link>
          <h3 style={styles.title}>Welcome</h3>
        </div>


        <LazyLoadImage
          src="/assets/welcome_img.png"
          alt="Welcome"
          effect="opacity"
          style={styles.image}
        // placeholderSrc="/assets/placeholder.png" 
        />
        <div style={styles.imageOverlay}></div>
      </div>

      <div style={styles.content}>
      <div style={styles.contentcontainer}>
        <h2 style={styles.heading}>Welcome</h2>
        <p style={styles.subText}>
          Discover endless styles, from timeless classics to the latest trends
        </p>

        <button style={styles.googleButton} onClick={handleGoogleSignIn}>
          <FcGoogle style={styles.googleIcon} /> Continue with Google
        </button>


        <Link to="/sign-up">
          <button style={styles.primaryButton}>Signup</button>
        </Link>

        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link to="/log-in" style={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
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
  backButton: {
    position: "absolute",
    left: "15px",
    textDecoration: "none",
  },
  backIcon: {
    fontSize: "22px",
    cursor: "pointer",
    color: "#fff",
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
   
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.5s ease-in-out",
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
