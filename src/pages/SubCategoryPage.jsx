import React, { useState, useEffect, Suspense, lazy } from "react";
import Loader from "../components/ui/Loader";
import LayoutWrapper from "../components/ui/LayoutWrapper";

const SubCategories = lazy(() => import("../components/screen/SubCategories"));

export default function SubCategoryPage() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {isMobile ? (
        <SubCategories isMobile={true} />
      ) : (
        <LayoutWrapper>
          <SubCategories isMobile={false} />
        </LayoutWrapper>
      )}
    </Suspense>
  );
}
