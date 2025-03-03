import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt, FaChevronRight, FaEdit } from "react-icons/fa";

export default function AccountPage() {
    const [phoneNumber, setPhoneNumber] = useState("8884443332");
    const [isEditingPhone, setIsEditingPhone] = useState(false);

    const handleLogout = () => {
 
        console.log("User logged out");
    };

    const handlePhoneEdit = () => {
        setIsEditingPhone(!isEditingPhone);
    };

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    return (
        <div style={styles.pageContainer}>
       
            <div style={styles.userInfo}>
                <img 
                    src="/assets/profile.jpg" 
                    alt="Profile" 
                    style={styles.profileImage}
                />
                <div style={styles.userName}>Siddharth Abhimanyu</div>
                <div style={styles.phoneContainer}>
                    {isEditingPhone ? (
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            style={styles.phoneInput}
                            autoFocus
                        />
                    ) : (
                        <div style={styles.userContact}>{phoneNumber}</div>
                    )}
                    <button style={styles.editButton} onClick={handlePhoneEdit}>
                        <FaEdit style={styles.editIcon} />
                    </button>
                </div>
                <div style={styles.userEmail}>siddharth124@gmail.com</div>
            </div>

    
            <div style={styles.menuContainer}>
                <AccountItem to="/address" icon="/assets/distance.svg" label="Address" />
                <AccountItem to="/my-orders" icon="/assets/shopping_bag_speed.svg" label="My Order" />
                <AccountItem to="/bonus" icon="/assets/paid.svg" label="Bonus" />
                <AccountItem to="/wishlist" icon="/assets/favorite.svg" label="Wishlist" />
                <AccountItem to="/refer-earn" icon="/assets/partner_exchange.svg" label="Refer & Earn" />
                <AccountItem to="/support" icon="/assets/headset_mic.svg" label="Support" />
                <AccountItem to="/legal-policies" icon="/assets/gavel.svg" label="Legal Policies" />
                <AccountItem to="/faqs" icon="/assets/quiz.svg" label="Brows FAQ's" />
                
              
                <AccountItem 
                    icon="/assets/move_item.svg"
                    label="Log Out" 
                    onClick={handleLogout}
                />
            </div>
        </div>
    );
};

const AccountItem = ({ to, icon, label, onClick }) => {
    const content = (
        <>
   
            <span style={styles.itemContent}>
                {typeof icon === "string" ? 
                    <img src={icon} alt={label} style={styles.icon} /> : 
                    icon
                }
                {label}
            </span>
            <FaChevronRight style={styles.arrowIcon} />
           
        </>
    );

    return to ? (
        <Link to={to} style={styles.accountItem}>
            {content}
        </Link>
    ) : (
        <div style={styles.accountItem} onClick={onClick}>
            {content}
        </div>
    );
};

const styles = {
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: '#f5f5f5', 
        color: '#333',
        padding: '20px',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "20px",
        marginBottom: '20px',
       
    },
    profileImage: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginBottom: '15px',
        objectFit: 'cover',
    },
    userName: {
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginBottom: '8px',
        textAlign: 'center',
    },
    phoneContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '4px',
    },
    userContact: {
        fontSize: "0.9rem",
        color: '#666',
    },
    phoneInput: {
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '4px 8px',
        fontSize: '0.9rem',
        width: '120px',
    },
    editButton: {
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    editIcon: {
        color: '#333',
        fontSize: '1rem',
    },
    userEmail: {
        fontSize: "0.9rem",
        color: '#666',
        textAlign: 'center',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    accountItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        color: "#333",
        fontSize: "1rem",
        borderRadius: "8px",
        textDecoration: "none",
        backgroundColor: '#fff',
        transition: 'background-color 0.2s',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#f8f8f8',
        }
    },
    itemContent: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    },
    icon: {
        width: "20px",
        height: "20px",
        color: '#666',
    },
    arrowIcon: {
        color: '#ccc',
        fontSize: '0.9rem',
    }
};