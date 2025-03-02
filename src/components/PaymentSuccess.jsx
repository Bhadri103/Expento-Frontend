import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PaymentSuccess() {
  const navigate = useNavigate();


  return (
    <div className="container-fluid" style={style.containerStyle}>
      {/* Top Bar */}
      <div className="d-flex align-items-center w-100 p-3 bg-white shadow-sm">
        <FaArrowLeft className="fs-4 me-3 cursor-pointer" onClick={() => navigate(-1)} />
        <span className="flex-grow-1 text-center fw-bold fs-5">Order Success</span>
      </div>

      {/* Success Content */}
      <div className="text-center d-flex flex-column align-items-center mt-4">
        <div className="d-flex justify-content-center" style={style.iconContainerStyle}>
          <img src="/Order_success.svg" alt="Order Success" className="w-50" />
        </div>
        <h2 className="mt-4 fw-bold">Your order was <br/> successful !</h2>
        <p className="text-muted">You will get a response within <br/> a few minutes.</p>
      </div>

      {/* Track Order Button */}
      <button className="btn btn-primary mt-3 w-75 px-4 py-2">Track order</button>
    </div>
  );
}


const style = {
    containerStyle: {
      minHeight: "100vh",
      minHeight: "100dvh",
      backgroundColor: "#f8f9fa",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding:"0 0 20px"
    },
    iconContainerStyle: {
      width: "150px",
      height: "150px",
      backgroundColor: "#082A45",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  
  }
    