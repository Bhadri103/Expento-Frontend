import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function SignupScreen() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    password: "",
  });

  const validateForm = () => {
    let newErrors = {
      firstName: "",
      email: "",
      mobileNumber: "",
      gender: "",
      password: "",
    };
    let valid = true;

    if (!firstName) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (!mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
      valid = false;
    }

    if (!gender) {
      newErrors.gender = "Gender is required";
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

      <div style={styles.signupBox}>
        <h2 style={styles.title}>Create Account</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name*</label>
          <input
            type="text"
            placeholder="First Name"
            style={styles.input}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (e.target.value) {
                setErrors((prev) => ({ ...prev, firstName: "" }));
              }
            }}
          />
          {errors.firstName && <p style={styles.errorText}>{errors.firstName}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email*</label>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                setErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
          />
          {errors.email && <p style={styles.errorText}>{errors.email}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Mobile Number</label>
          <input
            type="text"
            placeholder="Mobile Number"
            style={styles.input}
            value={mobileNumber}
            onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
            onChange={(e) => {
              setMobileNumber(e.target.value);
              if (e.target.value) {
                setErrors((prev) => ({ ...prev, mobileNumber: "" }));
              }
            }}
          />
          {errors.mobileNumber && <p style={styles.errorText}>{errors.mobileNumber}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Gender*</label>
          <select
            style={styles.input}
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              if (e.target.value) {
                setErrors((prev) => ({ ...prev, gender: "" }));
              }
            }}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p style={styles.errorText}>{errors.gender}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password*</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              style={{ ...styles.input, border: "none" }}

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
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input type="checkbox" />
          <p style={{ ...styles.subtitle, margin: 0 }}>
            Creating an account means you're okay with our{" "}
            <a href="/terms" style={styles.link}>Terms of Service</a>,{" "}
            <a href="/privacy" style={styles.link}>Privacy Policy</a>, and our default{" "}
            <a href="/notifications" style={styles.link}>Notification Settings</a>.
          </p>
        </div>


        <button style={styles.signupButton} onClick={handleSignup}>
          Create Account
        </button>

        <p style={styles.footerText}>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="/privacy" style={styles.link}>Privacy Policy</a> and{" "}
          <a href="/terms" style={styles.link}>Terms of Service</a> apply.
        </p>
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
    textAlign: "left",

  },
  signupBox: {
    width: "100%",
    maxWidth: "500px",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"

  },
  inputGroup: {
    marginBottom: "15px",
    maxWidth: "400px",
    width: "100%",

  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  passwordContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",

  },
  eyeIcon: {
    fontSize: "20px",
    color: "#666",
    cursor: "pointer",
  },
  errorText: {
    color: "red",
    fontSize: "12px",
    marginBottom: "0px",
  },
  signupButton: {
    width: "100%",
    backgroundColor: "#0B2447",
    color: "#fff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  footerText: {
    fontSize: "14px",
    color: "#555",
    textAlign: "left",
    marginTop: "20px",
  },
  link: {
    color: "#0B2447",
    textDecoration: "none",
    fontWeight: "bold",
  },
};