import React, { useState, useEffect } from "react";
import { categories } from "../../constants/category";
import { useNavigate } from "react-router-dom";

const SubCategories = ({ subCategories, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div id="loading-container" className="d-flex justify-content-center align-items-center">
        <p id="loading-text" style={styles.loader}>Loading...</p>
      </div>
    );
  }

  return (
    <div id="subcategories-container" style={styles.subCategories}>
      {subCategories.length > 0 ? (
        subCategories.map((sub) => (
          <div
            key={sub.id}
            id={`subCategory-${sub.id}`}
            style={styles.subCategoryItem}
            onClick={() => navigate(`/subcategories/${sub.id}`)}
          >
            <img
              id={`subImage-${sub.id}`}
              src={sub.image}
              style={styles.subimage}
              loading="lazy"
              alt={sub.subCategory}
            />
            <p id={`subCategoryText-${sub.id}`} style={styles.subCategoryText}>{sub.subCategory}</p>
          </div>
        ))
      ) : (
        <p id="no-subcategories">No subcategories available.</p>
      )}
    </div>
  );
};

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || null);
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const selectedCat = categories.find((cat) => cat.id === selectedCategory);
      setSubCategories(selectedCat?.subCategories || []);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div id="categories-container" style={styles.container}>
      <div id="topBar" style={styles.topBar}>All Categories</div>
      <div id="categories-content" style={styles.content}>
        <div id="categories-list" style={styles.categoriesList}>
          {categories.map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              style={styles.categoryItem(selectedCategory === category.id)}
              onClick={() => setSelectedCategory(category.id)}
            >
              <img
                id={`categoryImage-${category.id}`}
                src={category.image}
                alt={category.category}
                style={styles.image(selectedCategory === category.id)}
                loading="lazy"
              />
              {category.category}
            </div>
          ))}
        </div>
        <div id="subcategory-section">
          <SubCategories subCategories={subCategories} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Category;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    minHeight: "100dvh",
  },
  topBar: {
    backgroundColor: "#082A45",
    color: "#fff",
    padding: "15px 20px",
    fontSize: "20px",
    fontWeight: "600",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
  },
  categoriesList: {
    width: "fit-content",
  },
  categoryItem: (isSelected) => ({
    marginBottom: "10px",
    width: "75px",
    cursor: "pointer",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontWeight: isSelected ? "600" : "400",
    color: isSelected ? "#333" : "#333",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    textAlign: "center",
  }),
  subCategories: {
    width: "fit-content",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    alignItems: "start",
    justifyContent: "flex-start",
    borderRadius: "8px",
    marginLeft: "8px",
  },
  subCategoryItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "100px",
    padding: "4px",
    border: "1px solid #082A45",
    borderRadius: "8px",
    background: "Linear-gradient(180deg, #FFFFFF 0%, #C2D9FF 100%)",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  image: (isSelected) => ({
    width: "60px",
    height: "60px",
    border: isSelected ? "3px solid #082A45" : "3px solid transparent",
    objectFit: "cover",
    borderRadius: "50%",
  }),
  subimage: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
  },
  subCategoryText: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#333",
    margin: "0",
  },
  loader: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#082A45",
    textAlign: "center",
  },
};
