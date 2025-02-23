import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowLeft, FaEyeSlash, FaEye } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

import img1 from "../../assets/images/img_1.jpg";
import img2 from "../../assets/images/img_2.jpg";
import img3 from "../../assets/images/img_3.png";
import img4 from "../../assets/images/img_4.jpg";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);


  const validateForm = () => {
    let newErrors = { email: "", password: "" };
    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
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
      <h2 style={styles.title}>Login</h2>
      <p style={styles.subtitle}>
        Discover endless styles, from timeless classics to the latest trends.
      </p>

      <div style={styles.loginContainer} className="d-flex flex-lg-row  flex-column">
      <div style={styles.loginBox}>
  <div>
    <label style={styles.label}>Email address*</label>
    <div style={styles.inputContainer}>
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
  </div>

  <div>
    <label style={styles.label}>Password*</label>
    <div style={styles.inputContainer}>
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
  </div>

  <div style={styles.forgotSection}>
    <Link to="/forgot-password" style={styles.forgotPassword}>
      Forgot Password?
    </Link>
  </div>

  <div style={styles.loginButtonContainer}>
    <Link to="/sign-up" style={styles.signupText}>
      Create Account?
    </Link>
    <button style={styles.loginButton} onClick={handleSignup}>
      Login
    </button>
  </div>
</div>

        <div style={styles.sliderBox}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop={true}
            style={styles.swiper}
          >
            {[img1, img2, img3, img4].map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={styles.slideImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    paddingTop: "55px",
    paddingBottom: "65px",
  },
  loginContainer: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",

    gap: "40px",
    maxWidth: "1000px",
  },
  loginBox: {
    width: "100%",
    maxWidth: "400px",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
  },
  sliderBox: {
    width: "100%",
    maxWidth: "500px",
    height: "300px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  loginButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  loginButton: {
    backgroundColor: "#0B2447",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },
  slideImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },

  title: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "25px",
    textAlign: "center",
    maxWidth: "90%",
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
errorText: {
    color: "red", 
    fontSize: "12px",
    marginBottom: "5px"
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "5px",
  },

  forgotSection: {
    textAlign: "right",
    marginBottom: "15px",
  },
  forgotPassword: {
    fontSize: "13px",
    color: "#0B2447",
    fontWeight: "bold",
    textDecoration: "none",
  },

  errorText: {
    color: "red",
    fontSize: "12px",
    marginBottom: "5px",
  },

  signupText: {
    fontSize: "13px",
    color: "#0B2447",
    fontWeight: "bold",
    textDecoration: "none",
  },

  swiper: {
    width: "100%",
    height: "100%",
  },

};
