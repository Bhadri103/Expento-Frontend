import React, { useState, useEffect } from 'react';
import Account from '../components/mobilescreen/Account';
import MobileBottomNav from '../components/mobilescreen/MobileBottomNav'; // Import the mobile bottom nav component

export default function AccountPage() {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 600px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");

        const handleResize = (e) => setIsMobile(e.matches);

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <div style={styles.pageContainer}>
            <div style={styles.contentContainer}>
                <Account />
            </div>
            {isMobile && (
                <div style={styles.bottomNavContainer}>
                    <MobileBottomNav />
                </div>
            )}
        </div>
    );
}

const styles = {
    pageContainer: {
        position: 'relative',
        minHeight: '100vh',
    },
    contentContainer: {
        paddingBottom: '70px', 
    },
    bottomNavContainer: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, 
        backgroundColor: "#fff", 
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)", 
       
    },
};