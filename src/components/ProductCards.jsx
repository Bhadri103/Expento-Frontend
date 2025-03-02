import React, { useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import "../styles/similar-product.css";


const ProductCards = ({ products }) => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (id) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="p-2">

      
        <div className="topdeal-container">
            {products.map((product) => (
                <div className="similarprod-card-outer" key={product.id}>
                    <div className="cardtop-shape">{product.discount}</div>
                    <div className="explore-prod-img">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="topdeal-content-content">
                        <p className="topdeal-card-title">
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
                                    <div className="prod-price">
                                        <MdOutlineCurrencyRupee />{product.price}
                                    </div>
                                    <div><strike style={{ margin: 0 }}><MdOutlineCurrencyRupee />{product.originalPrice}</strike></div>

                                </div>
                            </div>
                            <div className="col-6 text-end">
                                <p className="text-end">
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
    );
};



export default ProductCards;