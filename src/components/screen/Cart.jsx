import React, { useState } from "react";
import { FaArrowLeft, FaPlus, FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import item from "../../assets/images/items.png";
import CartItems from "../ui/CartItems";
import Tatasalt from '../../images/yourgotoitems/tata-salt.jpg';
import kurkure from '../../images/yourgotoitems/kurkure.png';
import AddOnItems from "../AddOnItems"
import DeliveryPartnerTip from "../DeliveryPartnerTip"
import CostList from "../CostList";
import DeliveryInstruction from "../DeliveryInstruction";
import deliveryPartner from '../../assets/images/delivery_partner.png'

const initialCartItems = [
    {
        id: 2003,
        name: "Basmati Rice",
        image: item,
        region: "Haryana, India",
        productType: "Grain",
        pricing: [
            { weight: "5kg", price: "₹500", originalRate: "₹600", discount: "16% off" },
            { weight: "10kg", price: "₹950", originalRate: "₹1200", discount: "20% off" },
            { weight: "25kg", price: "₹2200", originalRate: "₹3000", discount: "26% off" },
        ],
        availableWeights: ["5kg", "10kg", "25kg"],
    },
    {
        id: 2004,
        name: "Wheat Atta",
        image: item,
        region: "Madhya Pradesh, India",
        productType: "Flour",
        pricing: [
            { weight: "5kg", price: "₹200", originalRate: "₹250", discount: "20% off" },
            { weight: "10kg", price: "₹380", originalRate: "₹500", discount: "24% off" },
        ],
        availableWeights: ["5kg", "10kg"],
    },
    {
        id: 2005,
        name: "Basmati Rice",
        image: item,
        region: "Haryana, India",
        productType: "Grain",
        pricing: [
            { weight: "5kg", price: "₹500", originalRate: "₹600", discount: "16% off" },
            { weight: "10kg", price: "₹950", originalRate: "₹1200", discount: "20% off" },
            { weight: "25kg", price: "₹2200", originalRate: "₹3000", discount: "26% off" },
        ],
        availableWeights: ["5kg", "10kg", "25kg"],
    },

];
const items = [
    { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
    { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },
    { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
    { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },
    { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
    { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },
    { image: Tatasalt, name: "Tata Salt", weight: "500 g", price: "₹25", offPrice: "₹24" },
    { image: kurkure, name: "Kurkure", weight: "500 g", price: "₹25", offPrice: "₹24" },

];

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(initialCartItems);

    return (
        <div>
            <div className="d-flex align-items-center w-100 p-3 bg-white shadow-sm">
                <FaArrowLeft className="fs-4 me-3 cursor-pointer" onClick={() => navigate(-1)} />
                <span className="flex-grow-1 text-center fw-bold fs-5">Cart</span>
            </div>
            <CartItems cartItems={cartItems} setCartItems={setCartItems} />
            <AddOnItems items={items} />
            <DeliveryPartnerTip />
            <CostList />
            <DeliveryInstruction />

            <div className="d-flex mt-3 mb-5  align-items-center w-100 justify-content-between p-3 " style={{
                boxShadow: "0.3px 0.3px 10px rgba(123, 123, 123, 0.4)",
            }}>
                <img src={deliveryPartner} alt="Delivery Partner" className="me-3" style={{ height: "48px", width: "48px" }} />
                <p className="text-secondary fs-6 mb-0">
                    See how we ensure our delivery partner’s safety
                    <a href="#" className="text-primary fw-semibold ms-1">Learn more</a>
                </p>
            </div>

            <div style={{ height: "200px" }}>

            </div>

        </div>
    );
}

