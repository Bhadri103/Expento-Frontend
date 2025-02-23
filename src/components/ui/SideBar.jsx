import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeadset, FaMapMarkerAlt, FaSignOutAlt, FaChevronRight } from "react-icons/fa";

const Sidebar = ({ isOpen, closeSidebar }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setLoading(true);
            setTimeout(() => setLoading(false), 400);
        } else {
            setTimeout(() => setVisible(false), 500);
        }
    }, [isOpen]);


    const handleAnimationEnd = () => {
        if (!isOpen) {
            setVisible(false);
        }
    };

    if (!visible) return null;

    return (
        <>
            <div
                style={isOpen ? styles.sidebarVisible : styles.sidebarHidden}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className="d-flex justify-content-end p-3">
                    <button className="btn-sm border-0 bg-transparent" onClick={closeSidebar} aria-label="Close sidebar">
                        <img src="/menu2.svg" alt="Close" style={{ width: "25px", height: "25px" }} />
                    </button>
                </div>

                <div style={styles.menuItems}>
                    {loading ? <SkeletonLoader /> : (
                        <>
                            <SidebarItem to="/log-in" icon="/assets/address.svg" label="Addresses" closeSidebar={closeSidebar} />
                            <SidebarItem to="/sign-up" icon="/assets/my_order.svg" label="My Order" closeSidebar={closeSidebar} />
                            <SidebarItem to="/sign-up" icon="/assets/bonus.svg" label="Bonus" closeSidebar={closeSidebar} />
                            <SidebarItem to="/location-selector" icon="/assets/wishlist.svg" label="Wishlist" closeSidebar={closeSidebar} />
                            <SidebarItem to="/location-selector" icon="/assets/refer_and_earn.svg" label="Refer & Earn" closeSidebar={closeSidebar} />
                            <SidebarItem to="/getstarted" icon="/assets/support.svg" label="Support" closeSidebar={closeSidebar} />
                            <SidebarItem to="/getstarted" icon="/assets/legal_policies.svg" label="Legal Policies" closeSidebar={closeSidebar} />
                            <SidebarItem to="/welcome" icon="/assets/brows_faq.svg" label="Brows FAQ's" closeSidebar={closeSidebar} />




                        </>
                    )}
                </div>

                <div className="px-4 py-3 w-100">
                    <button style={styles.logoutButton} className="" onClick={closeSidebar}>
                        <FaSignOutAlt className="me-2" />
                        Log out
                    </button>
                </div>
            </div>

            {isOpen && <div style={styles.overlay} onClick={closeSidebar} />}
        </>
    );
};

const SidebarItem = ({ to, icon, label, closeSidebar }) => {
    return (
        <Link to={to} style={styles.sidebarItem} className="sidebar-item" onClick={closeSidebar}>
            <span className="d-flex align-items-center gap-3">
                {typeof icon === "string" ? <img src={icon} alt={label} style={styles.icon} /> : icon}
                {label}
            </span>
            <FaChevronRight style={styles.arrowIcon} />
        </Link>
    );
};

const SkeletonLoader = () => {

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
    @keyframes loadingAnimation {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
`;
    document.head.appendChild(styleSheet);

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <div key={index} style={styles.skeletonItem}></div>
            ))}
        </div>
    );
};

const styles = {
    sidebarHidden: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "250px",
        height: "100dvh",
        backgroundColor: "#08293b",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
        transform: "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: "1000",
        paddingTop: "10px",
        animation: "slideOut 0.3s forwards",
    },
    sidebarVisible: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "250px",
        height: "100dvh",
        backgroundColor: "#08293b",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
        transform: "translateX(0)",
        transition: "transform 0.3s ease-in-out",
        zIndex: "1000",
        paddingTop: "10px",
        animation: "slideIn 0.3s forwards",
    },

    menuItems: {
        padding: "10px",
    },
    sidebarItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        color: "white",
        fontSize: "16px",
        cursor: "pointer",
        gap: "10px",
        borderRadius: "8px",
        textDecoration: "none",
    },
    icon: {
        width: "20px",
        height: "20px",
    },
    overlay: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "999",
    },
    logoutButton: {
        width: "100%",
        background: "rgba(255, 255, 255, 0.1)",
        color: "white",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        transition: "background-color 0.3s ease-in-out",
    },
    skeletonItem: {
        height: "38px",
        width: "100%",
        background: "linear-gradient(90deg, #1b4a5a 25%, #2b6f88 50%, #1b4a5a 75%)",
        backgroundSize: "200% 100%",
        marginBottom: "10px",
        borderRadius: "8px",
        animation: "loadingAnimation 1.5s infinite"
    }
};

export default Sidebar;
