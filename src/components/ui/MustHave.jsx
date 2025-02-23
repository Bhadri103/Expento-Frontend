
import '../../styles/explore-by-category.css';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import cardTopVector from "../../images/products/card-top-vector.png";
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// Dummy data for now (later replace with API data)
const products = [
    {
        id: 1,
        name: "Philips Appliance Classic Gc097/50 Dry Iron",
        description: "Trond Men's Regular Fit",
        image: require("../../images/musthave/ironbox.png"),
        price: 4999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 5.0,
    },
    {
        id: 2,
        name: "Pigeon Special 3L Stainless Steel Induction",
        description: "Duracell 20000 mAh Power Bank - 22.5 W",
        image: require("../../images/musthave/cooker.png"),
        price: 3999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Agaro Signify Handheld Garment Steamer",
        description: "Ambrane 20000mAh Powerbank, 22.5W",
        image: require("../../images/musthave/streamer.png"),
        price: 999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 4.5,
    },
    {
        id: 4,
        name: "Pigeon 5L Aluminium Induction Base Inner",
        description: "Portronics Konnect Micro USB Cable",
        image: require("../../images/musthave/cooker2.png"),
        price: 4999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 5.0,
    },
    {
        id: 5,
        name: "Havells Temptor Iron",
        description: "Duracell 20000 mAh Power Bank - 22.5 W",
        image: require("../../images/musthave/ironbox2.png"),
        price: 3999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 4.8,
    },


];

const MustHave = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    return (
        <section className='similar-products mt-5'>
            <div className="container px-0">
                <div className="row">
                    <div className="col-8"><h3 className="section-heading">Must have in your Household</h3></div>
                    <div className="col-4 text-end"><Link to=''>See All</Link></div>
                </div>
                <div className="row g-3 d-flex justify-content-center">

                    {products.map((product) => (
                        <div className="explore-card-outer" key={product.id}>
                            <div className="similarProductCard">
                                <div className="cardtop-shape">{product.discount}</div>
                                <div className="explore-prod-img">
                                    <img src={product.image} alt={product.name} className='img-fluid' />
                                </div>
                                <div className="prod-content">
                                    <p className="prod-title mb-0">
                                        {expanded[product.id]
                                            ? product.name
                                            : `${product.name?.slice(0, 8) || ""} ..`}
                                        <span
                                            className="readMoreLess"
                                            onClick={() => toggleReadMore(product.id)}
                                        >
                                            {expanded[product.id] ? "..." : "..."}
                                        </span>
                                    </p>
                                    {/* <p className="prod-title mb-0">{product.name}</p> */}
                                    {/* <p className="prod-desc">{product.description}</p> */}
                                    <div className="row mb-2">
                                        <div className="col-12">
                                            <div className="piece">
                                                1 piece
                                            </div>
                                            <div className="price">
                                                <span className="prod-price">
                                                    <MdOutlineCurrencyRupee />{product.price}
                                                </span>
                                                <strike><MdOutlineCurrencyRupee />{product.originalPrice}</strike>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="prod-add-cart">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MustHave;
