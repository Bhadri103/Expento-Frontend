import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import SelectLocation from "./SelectLocation";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>

            <nav style={styles.navbar} className="d-flex align-items-center px-4">
                <img src="assets/menu.png" alt="Menu"
                    style={{ ...styles.icon, strokeWidth: 1.5, color: "rgba(255, 255, 255, 0.92)" }}
                    onClick={() => setSidebarOpen(true)}
                />

                <Link to="/"><img src="/expento_logo_png.png" alt="Expento Logo" style={styles.logo} /></Link>

                <SelectLocation />

                <div style={styles.searchContainer} className="mx-auto">
                    <FaSearch style={styles.searchIcon} />
                    <input type="text" placeholder="Search for" style={styles.searchInput} />
                </div>

                <div className="d-flex align-items-center justify-content-center gap-3 px-3">
                    <Link to="/Welcome" style={{ textDecoration: "none" }}>
                        <div className="d-flex flex-column align-items-center pointer" style={{ cursor: "pointer" }}>
                            <img src="/login_logo.svg" alt="Login" style={styles.icon} />
                            <span style={styles.text}>Login</span>
                        </div>
                    </Link>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                        <div className="d-flex flex-column align-items-center ms-3" style={{ cursor: "pointer" }}>
                            <img src="/cart_logo.svg" alt="Cart" style={styles.icon} />
                            <span style={styles.text}>Cart</span>
                        </div>
                    </Link>
                </div>
            </nav>


            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        </>
    );
};

const styles = {
    navbar: {
        backgroundColor: "#0B2C47",
        display: "flex",
        alignItems: "center",
        color: "white",
        width: "100%",
    },
    icon: {
        width: "25px",
        height: "25px",
        cursor: "pointer",
    },
    logo: {
        maxWidth: "80px",
        marginLeft: "15px",
    },
    searchContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "50%",
    },
    searchInput: {
        width: "100%",
        padding: "8px 12px",
        paddingLeft: "30px",
        borderRadius: "5px",
        border: "none",
        outline: "none",
    },
    searchIcon: {
        position: "absolute",
        left: "10px",
        color: "#777",
    },
    text: {
        fontSize: "16px",
        color: "white",
    },
};

export default Navbar;
