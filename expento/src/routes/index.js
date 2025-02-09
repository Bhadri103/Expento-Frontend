import React, { lazy } from "react";



const Login = lazy(() => import("../components/mobilescreen/Login")); 
const LandingPage = lazy(() => import("../pages/LandingPage"));
const GetStarted = lazy(() => import("../components/mobilescreen/GetStarted"));
const Welcome = lazy(() => import("../components/mobilescreen/Welcome"));
const Signup = lazy(() => import("../components/mobilescreen/Signup"));


export const routes = [
  {
    name: "LandingPage",
    path: "/",
    element: <LandingPage />, 

  },
  {
    name: "GetStarted",
    path: "/getstarted",
    element: <GetStarted />,
  },
  {
    name: "Welcome",
    path: "/welcome",
    element: <Welcome />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },        
  {
    name: "Signup",
    path: "/signup",
    element: <Signup />,
  }
];
