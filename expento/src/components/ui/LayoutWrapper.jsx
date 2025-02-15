import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
    return (
        <div className="">
            <header>
                <Navbar />
            </header>

            <main className="">{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LayoutWrapper;