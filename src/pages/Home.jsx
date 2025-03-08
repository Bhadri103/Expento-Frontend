import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import LayoutWrapper from "../components/ui/LayoutWrapper";
import MobileBottomNav from "../components/mobilescreen/MobileBottomNav"; 
import IndexCategory from "../components/ui/IndexCategory";

// const Login = lazy(() => import("../components/mobilescreen/Login"));
const YourGoToItems = lazy(() => import("../components/ui/YourGoToItems"));
const SimilarProduct = lazy(() => import("../components/ui/SimilarProduct"));
const ExploreByCategories = lazy(() => import("../components/ui/ExploreByCategories"));
const ExploreByCategoryBottom = lazy(() => import("../components/ui/ExploreByCategoryBottom"));
const MustHave = lazy(() => import("../components/ui/MustHave"));

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
            {/* {isMobile ? <Login /> : */}
            <>
            {!isMobile && ( <IndexCategory/>)}
                <YourGoToItems />
                <SimilarProduct />
                <ExploreByCategories />
                <ExploreByCategoryBottom />
                <MustHave />
                {isMobile && (
                    <div style={styles.bottomNavContainer}>
                        <MobileBottomNav />
                    </div>
                )}
            </>
            {/* } */}
        </Suspense>
    );
}


const styles = {
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