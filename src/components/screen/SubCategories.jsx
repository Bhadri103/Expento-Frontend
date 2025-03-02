import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import category4 from "../../assets/images/category/beauty.jpg";
import "../../styles/subCategories.css";
import { categories } from "../../constants/category";
import Items from "../ui/Items" 

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