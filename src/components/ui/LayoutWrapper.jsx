import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import MobileNav from './MobileNav';

const LayoutWrapper = ({ children }) => {
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
        <div className="">
            <header>
                {isMobile ? <MobileNav /> : <Navbar />} 
            </header>

            <main className="">{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LayoutWrapper;