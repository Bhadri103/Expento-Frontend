import React, { useState, useEffect } from "react";
import { categories } from "../../constants/category";

const SubCategories = ({ subCategories, isLoading }) => {
  if (isLoading) {
    return (
      <>
        <div className="d-flex justify-content-center w-auto align-items-center">
          <p style={styles.loader}>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <div style={styles.subCategories}>
      {subCategories.length > 0 ? (
        subCategories.map((sub) => (
          <div key={sub.subCategory} style={styles.subCategoryItem}>
            <img
              src={sub.image}
              style={styles.subimage}
              loading="lazy"
              alt={sub.subCategory}
            />
            <p style={styles.subCategoryText}>{sub.subCategory}</p>
          </div>
        ))
      ) : (
        <p>No subcategories available.</p>
      )}
    </div>
  );
};

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.category || null);
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const selectedCat = categories.find((cat) => cat.category === selectedCategory);
      setSubCategories(selectedCat?.subCategories || []);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div style={styles.container}>

      <div style={styles.topBar}>All Categories</div>


      <div style={styles.content}>

        <div style={styles.categoriesList}>
          {categories.map((category) => (
            <div
              key={category.category}
              style={styles.categoryItem(selectedCategory === category.category)}
              onClick={() => setSelectedCategory(category.category)}
            >
              <img
                src={category.image}
                alt={category.category}
                style={styles.image(selectedCategory === category.category)}
                loading="lazy"
              />
              {category.category}
            </div>
          ))}
        </div>


        <div>
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
    width: "100%",
  },
};
