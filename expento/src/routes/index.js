import React, { lazy } from "react";




const LandingPage = lazy(() => import("../pages/LandingPage"));
const GetStartedPage = lazy(() => import("../pages/GetStartedPage"));
const WelcomePage = lazy(() => import("../pages/WelcomePage")); 
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const ForgetPasswordPage = lazy(() => import("../pages/ForgetPasswordPage"));
const LocationSelectorPage = lazy(() => import("../pages/LocationSelectorPage"));



export const routes = [
  {
    name: "LandingPage",
    path: "/",
    element: <LandingPage />, 

  },
  {
    name: "GetStarted",
    path: "/getstarted",
    element: <GetStartedPage />,
  },
  {
    name: "Welcome",
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    name: "Login",
    path: "/log-in",
    element: <LoginPage />,
  },        
  {
    name: "Signup",
    path: "/sign-up",
    element: <SignupPage />,
  },
  {
    name: "ForgetPassword",
    path: "/forget-password",
    element: <ForgetPasswordPage />
  },
  {
    name:"Location-Selector",
    path:"/location-selector",
    element:<LocationSelectorPage/>
  }
];
