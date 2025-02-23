import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import LayoutWrapper from "../components/ui/LayoutWrapper";

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
 
                    <YourGoToItems />
                    <SimilarProduct />
                    <ExploreByCategories />
                    <ExploreByCategoryBottom />
                    <MustHave />
  
            </>
            {/* } */}
        </Suspense>
    );
}
