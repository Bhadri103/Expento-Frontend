import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/subCategories.css"; 

const Items = ({ items, isLoading, selectedSubCategory }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div id="loading-container" className="loading-container">
        <p id="loading-text" className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div id="subcategory-content">
      {selectedSubCategory ? (
        <div id="items-grid" className="items-grid">
          {items.length > 0 ? (
            items.map((item) => {
              const firstPricing = item.pricing[0];
              return (
                <div
                  key={item.id}
                  id={`item-${item.id}`}
                  onClick={() => navigate(`/item/${item.id}`)}
                  className="item-card"
                >
                  <div>
                    <div className="item-overlay">
                      <svg
                        className="discount-icon"
                        width="40"
                        height="40"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0,0 H100 V100 Q50 80 0 100 Z" fill="#082A45" />
                        <text
                          x="50"
                          y="40"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="25px"
                          fontFamily="Arial, sans-serif"
                        >
                          <tspan x="50" dy="-5">{firstPricing.discount.split(" ")[0]}</tspan>
                          <tspan x="50" dy="25">{firstPricing.discount.split(" ")[1]}</tspan>
                        </text>
                      </svg>
                      <img
                        id={`item-image-${item.id}`}
                        src={item.image}
                        alt={item.name}
                        className="item-image"
                      />
                    </div>
                    <p id={`item-name-${item.id}`} className="item-name">{item.name}</p>
                  </div>
                  <div className="item-details">
                    <p className="quantity">{firstPricing.weight}</p>
                    <div className="price">
                      <span><p className="current-price">{firstPricing.price}</p></span>
                      <span><p className="original-price">{firstPricing.originalRate}</p></span>
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              );
            })
          ) : (
            <p id="no-items">No items available.</p>
          )}
        </div>
      ) : (
        <p id="no-subcategory">Subcategory not found.</p>
      )}
    </div>
  );
};

export default Items;