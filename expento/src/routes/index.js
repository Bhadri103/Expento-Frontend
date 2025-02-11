import React, { lazy, Suspense } from "react";
import Loader from "../components/ui/Loader";


const LandingPage = lazy(() => import("../pages/LandingPage"));
const GetStartedPage = lazy(() => import("../pages/GetStartedPage"));
const WelcomePage = lazy(() => import("../pages/WelcomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const ForgetPasswordPage = lazy(() => import("../pages/ForgetPasswordPage"));
const LocationSelectorPage = lazy(() =>
  import("../pages/LocationSelectorPage")
);

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
    name: "ForgetPassword",
    path: "/forget-password",
    element: withSuspense(ForgetPasswordPage)
  },
  {
    name: "Location-Selector",
    path: "/location-selector",
    element: withSuspense(LocationSelectorPage)
  }
];
