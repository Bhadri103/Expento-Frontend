
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
        name: "Portronics Adapto 45 USB Type-C",
        description: "Trond Men's Regular Fit",
        image: require("../../images/explorebycategory/adaptor.png"),
        price: 4999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 5.0,
    },
    {
        id: 2,
        name: "Duracell 20000 mAh Power Bank",
        description: "Duracell 20000 mAh Power Bank - 22.5 W",
        image: require("../../images/explorebycategory/battery.png"),
        price: 3999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Pambrane 20000mAh Powerbank",
        description: "Ambrane 20000mAh Powerbank, 22.5W",
        image: require("../../images/explorebycategory/powerbank.png"),
        price: 999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 4.5,
    },
    {
        id: 4,
        name: "Portronics Konnect Micro USB Cable",
        description: "Portronics Konnect Micro USB Cable",
        image: require("../../images/explorebycategory/typec.png"),
        price: 4999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 5.0,
    },
    {
        id: 5,
        name: "Duracell 20000 mAh Power Bank - 22.5 W",
        description: "Duracell 20000 mAh Power Bank - 22.5 W",
        image: require("../../images/explorebycategory/battery.png"),
        price: 3999,
        originalPrice: '₹999',
        discount: "₹349",
        rating: 4.8,
    },


];

const ExploreByCategories = () => {
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
                <div className="d-flex justify-content-between px-2">
                    <div className=" "><h3 className="section-heading">Explore By Categories</h3></div>
                    <div className=" text-end"><Link to=''>See All</Link></div>
                </div>
                <div className="row w-100 g-3 d-flex justify-content-center">

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

export default ExploreByCategories;
