 
import '../../styles/similar-product.css';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import cardTopVector from "../../images/products/card-top-vector.png";
import React, { useState } from 'react'
// Dummy data for now (later replace with API data)
const products = [
    {
        id: 1,
        name: "Hooded Puffer Jacket",
        description: "Trond Men's Regular Fit",
        image: require("../../images/products/img-8.png"),
        price: 4999,
        originalPrice: 5000,
        discount: "18% Off",
        rating: 5.0,
    },
    {
        id: 2,
        name: "Winter Coat",
        description: "Stylish Women's Wear",
        image: require("../../images/products/img-6.png"),
        price: 3999,
        originalPrice: 4500,
        discount: "12% Off",
        rating: 4.8,
    },
    {
        id: 3,
        name: "Casual T-Shirt",
        description: "Soft Cotton Material",
        image: require("../../images/products/img-1.png"),
        price: 999,
        originalPrice: 1200,
        discount: "15% Off",
        rating: 4.5,
    },
    {
        id: 4,
        name: "Hooded Puffer Jacket",
        description: "Trond Men's Regular Fit",
        image: require("../../images/products/img-8.png"),
        price: 4999,
        originalPrice: 5000,
        discount: "18% Off",
        rating: 5.0,
    },
    {
        id: 5,
        name: "Winter Coat",
        description: "Stylish Women's Wear",
        image: require("../../images/products/img-6.png"),
        price: 3999,
        originalPrice: 4500,
        discount: "12% Off",
        rating: 4.8,
    },
    {
        id: 6,
        name: "Casual T-Shirt",
        description: "Soft Cotton Material",
        image: require("../../images/products/img-1.png"),
        price: 999,
        originalPrice: 1200,
        discount: "15% Off",
        rating: 4.5,
    },
    {
        id: 7,
        name: "Hooded Puffer Jacket",
        description: "Trond Men's Regular Fit",
        image: require("../../images/products/img-8.png"),
        price: 4999,
        originalPrice: 5000,
        discount: "18% Off",
        rating: 5.0,
    },
    {
        id: 8,
        name: "Winter Coat",
        description: "Stylish Women's Wear",
        image: require("../../images/products/img-6.png"),
        price: 3999,
        originalPrice: 4500,
        discount: "12% Off",
        rating: 4.8,
    },

];

const SimilarProduct = () => {
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
                <h3 className='mb-2'>Similar product</h3>
                <div className="row g-3 d-flex justify-content-center">

                    {products.map((product) => (
                        <div className="similarprod-card-outer" key={product.id}>

                            <div className="cardtop-shape">{product.discount}</div>
                            <div className="prod-img">
                                <img src={product.image} alt={product.name} className='img-fluid' />
                            </div>
                            <div className="prod-content">

                                {/* <p className="prod-title mb-0">{product.name}</p> */}
                                <p className="prod-title mb-0">
                                    {expanded[product.id]
                                        ? product.name
                                        : `${product.name?.slice(0, 14) || ""} ..`}
                                    <span
                                        className="readMoreLess"
                                        onClick={() => toggleReadMore(product.id)}
                                    >
                                        {expanded[product.id] ? "..." : "..."}
                                    </span>
                                </p>

                                <div className="row mb-2">
                                    <div className="col-6">
                                        <div className="price">
                                            <span className="prod-price">
                                                <MdOutlineCurrencyRupee />{product.price}
                                            </span>
                                            <strike><MdOutlineCurrencyRupee />{product.originalPrice}</strike>
                                        </div>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p className='text-end'>
                                            <span className="starRatingIcon d-flex justify-content-end align-items-center">
                                                <FaStar />
                                                <span className="ms-1">{product.rating}</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <button className="prod-add-cart">
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SimilarProduct;
