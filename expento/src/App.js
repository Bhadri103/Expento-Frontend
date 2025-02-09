import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { routes } from "./routes";
import Loader from "./components/ui/Loader";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastStyle={{
          fontSize: "14px",
          fontWeight: "500",
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
          maxWidth: "90%", 
          margin: "10px auto", 
          padding: "12px 16px"
        }}
      />

      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
