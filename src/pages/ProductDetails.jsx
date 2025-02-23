import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import LayoutWrapper from "../components/ui/LayoutWrapper";

const ProductDetails = lazy(() => import("../components/ui/ProductDetails"));
const LoginScreen = lazy(() => import("../components/screen/LoginScreen"));

export default function LoginPage() {
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
        <Suspense fallback={<Loader />}>
            {isMobile ? <ProductDetails /> :
                <>

                    <LayoutWrapper>
                        <ProductDetails />
                    </LayoutWrapper>
                </>
            }
        </Suspense>
    );
}
