import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav = () => {
    const location = useLocation();

    const isSelected = (path) => location.pathname === path;

    return (
        <nav style={styles.navbar}>
            <div style={styles.navbarLinks}>
       
                <Link 
                    to="/" 
                    style={{ 
                        ...styles.link, 
                        ...(isSelected('/') && styles.selectedLink )
                    }}
                >
                    <img
                        src="/assets/add_home.svg"
                        alt="Home"
                        style={{ 
                            ...styles.icon, 
                            ...(isSelected('/') && styles.selectedIcon) 
                        }}
                    />
                    <span 
                        style={{ 
                            ...styles.label, 
                            ...(isSelected('/') && styles.selectedLabel) 
                        }}
                    >
                        Home
                    </span>
                </Link>

                <Link 
                    to="/category" 
                    style={{ 
                        ...styles.link, 
                        ...(isSelected('/category') && styles.selectedLink) 
                    }}
                >
                    <img
                        src="/assets/category.svg"
                        alt="Categories"
                        style={{ 
                            ...styles.icon, 
                            ...(isSelected('/category') && styles.selectedIcon) 
                        }}
                    />
                    <span 
                        style={{ 
                            ...styles.label, 
                            ...(isSelected('/category') && styles.selectedLabel) 
                        }}
                    >
                        Categories
                    </span>
                </Link>


                <div style={styles.logoContainer}>
                    <Link 
                        to="/" 
                        style={{ 
                            ...styles.link, 
                            ...(isSelected('/') && styles.selectedLink) 
                        }}
                    >
                        <div style={styles.navbarLogoContainer}>
                            <img
                                src="/expento_logo.svg"
                                alt="Expedio Logo"
                                style={styles.navbarLogo}
                            />
                        </div>
                    </Link>
                </div>

                <Link 
                    to="/cart" 
                    style={{ 
                        ...styles.link, 
                        ...(isSelected('/cart') && styles.selectedLink) 
                    }}
                >
                    <img
                        src="/assets/local_mall.svg"
                        alt="Cart"
                        style={{ 
                            ...styles.icon, 
                            ...(isSelected('/cart') && styles.selectedIcon) 
                        }}
                    />
                    <span 
                        style={{ 
                            ...styles.label, 
                            ...(isSelected('/cart') && styles.selectedLabel) 
                        }}
                    >
                        Cart
                    </span>
                </Link>

                <Link 
                    to="/account" 
                    style={{ 
                        ...styles.link, 
                        ...(isSelected('/account') && styles.selectedLink) 
                    }}
                >
                    <img
                        src="/assets/account_circle.svg"
                        alt="Account"
                        style={{ 
                            ...styles.icon, 
                            ...(isSelected('/account') && styles.selectedIcon) 
                        }}
                    />
                    <span 
                        style={{ 
                            ...styles.label, 
                            ...(isSelected('/account') && styles.selectedLabel) 
                        }}
                    >
                        Account
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default MobileBottomNav;
const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '10px 0',
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    navbarLinks: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
    selectedLink: {

    },
    icon: {
        height: '24px',
        marginBottom: '4px',
        filter: 'brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(91%) contrast(89%)', // Default icon color (#87848A)
    },
    selectedIcon: {
        filter: 'brightness(0) saturate(100%) invert(17%) sepia(47%) saturate(2098%) hue-rotate(183deg) brightness(93%) contrast(95%)', // Selected icon color (#082A45)
    },
    label: {
        fontSize: '12px',
        fontWeight: '500',
        color: '#87848A', 
    },
    selectedLabel: {
        color: '#082A45', 
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    navbarLogoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#082A45',
        borderRadius: '50%',
        padding: '2px',
    },
    navbarLogo: {
        height: '52px',
    },
};