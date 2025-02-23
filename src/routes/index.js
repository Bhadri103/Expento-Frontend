import React, { lazy, Suspense } from "react";
import Loader from "../components/ui/Loader";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const GetStartedPage = lazy(() => import("../pages/GetStartedPage"));
const WelcomePage = lazy(() => import("../pages/WelcomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const ForgetPasswordPage = lazy(() => import("../pages/ForgetPasswordPage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));
const LocationSelectorPage = lazy(() =>import("../pages/LocationSelectorPage"));
const CategoryPage = lazy(() =>import("../pages/CategoryPage"));
const SubCategoryPage = lazy(() => import("../pages/SubCategoryPage"));
const ItemPage = lazy(() => import("../components/mobilescreen/ItemDetails"));


const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Home = lazy(() => import("../pages/Home"));
const YourGotoList = lazy(() => import("../pages/Home"));


const withSuspense = Component =>
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>;

export const routes = [
  {
    name: "LandingPage",
    path: "/",
    element: withSuspense(LandingPage)
  },
  {
    name: "GetStarted",
    path: "/getstarted",
    element: withSuspense(GetStartedPage)
  },
  {
    name: "Welcome",
    path: "/welcome",
    element: withSuspense(WelcomePage)
  },
  {
    name: "Login",
    path: "/log-in",
    element: withSuspense(LoginPage)
  },
  {
    name: "Signup",
    path: "/sign-up",
    element: withSuspense(SignupPage)
  },
  {
    name: "ForgotPassword",
    path: "/forgot-password",
    element: withSuspense(ForgetPasswordPage)
  },
  {
    name: "ResetPassword",
    path: "/reset-password",
   element: withSuspense(ResetPasswordPage)
   },
  {
    name: "Location-Selector",
    path: "/location-selector",
    element: withSuspense(LocationSelectorPage)
  },
  {
    name: "Product Details",
    path: "/product-details",
    element: withSuspense(ProductDetails)
  },
  {
    name: "Category",
    path: "/category",
    element: withSuspense(CategoryPage)
  },
  {
    name: "Home",
    path: "/home",
    element: withSuspense(Home)
  },
  {
    name: "Your Goto List",
    path: "/your-goto-list",
    element: withSuspense(YourGotoList)
  },
  {
    name: "Item",
    path: "/item/:itemId",
    element: withSuspense(ItemPage),
  },
  {
    name: "SubCategory",
    path:  "/subcategories/:subCategoryId", 
    element: withSuspense(SubCategoryPage),
  },
];
