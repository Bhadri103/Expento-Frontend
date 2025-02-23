import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../../constants/category";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import category4 from "../../assets/images/category/beauty.jpg";
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
                <div key={item.id} id={`item-${item.id}`}
                  onClick={() => navigate(`/item/${item.id}`)}
                  className="item-card">
                  <div>
                    <div className="item-overlay">
                      <svg className="discount-icon"
                        width="40"
                        height="40"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0,0 H100 V100 Q50 80 0 100 Z"
                          fill="#082A45"
                        />
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

const SubCategories = ({ isMobile }) => {
  const { subCategoryId } = useParams();
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [parentCategory, setParentCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const foundCategory = categories.find((cat) =>
      cat.subCategories.some((sub) => sub.id.toString() === subCategoryId)
    );

    if (foundCategory) {
      setParentCategory(foundCategory);
      if (subCategoryId === "all" || !subCategoryId) {
        setItems(foundCategory.subCategories.flatMap((sub) => sub.items) || []);
        setSelectedSubCategory(null);
      } else {
        const foundSubCategory = foundCategory.subCategories.find(
          (sub) => sub.id.toString() === subCategoryId
        );
        if (foundSubCategory) {
          setSelectedSubCategory(foundSubCategory);
          setItems(foundSubCategory.items || []);
        }
      }
    }
  }, [subCategoryId]);

  return (
    <div id="subcategory-container">
      {isMobile && ( // Hide TopBar when isMobile is false
        <div id="topBar" className="top-bar">
          <FaArrowLeft className="icon" onClick={() => navigate(-1)} />

          {isSearching ? (
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              autoFocus
              onBlur={() => setIsSearching(false)}
            />
          ) : (
            <span className="title">Fruits & Vegetable</span>
          )}

          <FaSearch className="icon" onClick={() => setIsSearching(true)} />
        </div>
      )}
      
      <div id="categories-content" className="content">
        <div id="subcategory-list" className="categories-list">
          {[{ id: "all", subCategory: "All", image: category4 }, ...(parentCategory?.subCategories || [])].map(
            (sub) => {
              const isAllSelected = sub.id === "all" && (!selectedSubCategory || subCategoryId === "all");
              const isSubSelected = selectedSubCategory?.id === sub.id;
              const isSelected = isAllSelected || isSubSelected;

              return (
                <div
                  key={sub.id}
                  id={`subcategory-${sub.id}`}
                  className={`subcategory-item ${isSelected ? "selected" : ""}`}
                  onClick={() => navigate(`/subcategories/${sub.id}`)}
                >
                  <img
                    id={`subImage-${sub.id}`}
                    src={sub.image}
                    className="subcategory-image"
                    loading="lazy"
                    alt={sub.subCategory}
                  />
                  <p>{sub.subCategory}</p>
                </div>
              );
            }
          )}
        </div>

        <Items
          items={subCategoryId === "all" || !subCategoryId ? parentCategory?.subCategories.flatMap(sub => sub.items) || [] : items}
          isLoading={false}
          selectedSubCategory={selectedSubCategory}
        />
      </div>
    </div>
  );
};

export default SubCategories;