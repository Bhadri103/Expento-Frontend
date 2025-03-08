import React, { useState, useRef, useEffect } from "react";
import { bottom, createPopper } from "@popperjs/core";
import { categories } from "../../constants/category";
import { useNavigate } from "react-router-dom";

export default function IndexCategory(  ) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const buttonRefs = useRef({});
  const dropdownRef = useRef(null);
  const popperInstance = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (isDropdownVisible && selectedCategory && buttonRefs.current[selectedCategory]) {
      if (popperInstance.current) {
        popperInstance.current.destroy();
   
      }

      popperInstance.current = createPopper(
        buttonRefs.current[selectedCategory],
        dropdownRef.current,
        {
          placement: "bottom",
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                boundary: "viewport",
                padding: 10,
              },
            },
            {
              name: "flip",
              options: {
                fallbackPlacements: ["top", "bottom"],
              },
            },
          ],
        }
      );
    }
  }, [isDropdownVisible, selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setIsDropdownVisible(!isDropdownVisible);
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
      setIsDropdownVisible(true);
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.categoryContainer}>
        {categories.map((category) => (
          <div
            key={category.id}
            ref={(el) => (buttonRefs.current[category.id] = el)}
            style={{
              ...styles.categoryItem,
              backgroundColor: selectedCategory === category.id ? "#082A45" : "transparent",
              color: selectedCategory === category.id ? "white" : "black",
            }}
            onClick={() => handleCategoryClick(category.id)}
          >
            <img src={category.image} alt={category.category} style={styles.categoryImage} />
            <span style={styles.categoryText}>{category.category}</span>
          </div>
        ))}
      </div>


      {isDropdownVisible && selectedCategory && (
        <div ref={dropdownRef} style={styles.megaDropdown}>
          <div style={styles.subCategoryContainer}>
            {categories
              .find((cat) => cat.id === selectedCategory)
              ?.subCategories.map((sub) => (
                <div key={sub.id} style={styles.subCategoryBox}   onClick={() => navigate(`/subcategories/${sub.id}`)}>
                    <div style={styles.subCategoryImageBox} >
                        <img src={sub.image} alt={sub.subCategory} style={styles.subCategoryImage} />
                     </div>
                  
                  <h3 style={styles.subCategoryText}>{sub.subCategory}</h3>
                </div>
              ))}
            <div style={styles.subCategoryBox}>
              <h3 style={styles.seeAllText}>See All ➝</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      },
      categoryContainer: {
        display: "flex",
  
        gap: "1rem",
        paddingTop: "1.5rem",
        justifyContent: "flex-start", 
        alignItems: "center",
        overflowX: "auto",
        whiteSpace: "nowrap",
        maxWidth: "100vw", 
        paddingBottom: "10px", 
        
      },
      categoryItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textAlign: "center",
        padding: "8px",
        borderRadius: "10px 10px 0 0",
        transition: "background-color 0.1s ease-in-out",
        minWidth: "100px",
      },
      categoryImage: {
        borderRadius: "50%",
        width: "56px",
        height: "56px",
      },
      categoryText: {
        fontWeight: "600",
        fontSize: "14px",
      },



  megaDropdown: {
    position: "absolute",
    backgroundColor: "#082A45",
    color: "white",
    padding: "1.5rem 4rem",
    borderRadius: "10px",
    width: "fit-content",
    minWidth: "650px",

    
    
    zIndex: 1000,
  },
  subCategoryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", 
    gap: "1rem",
    justifyContent: "center",
  },
  subCategoryBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    justifyContent: "center",
    width: "130px",
    height: "170px",
    padding: "4px",
    border: "1px solid #082A45",
    borderRadius: "8px",
    background: "Linear-gradient(180deg, #FFFFFF 0%, #C2D9FF 100%)",
    textAlign: "center",
    transition: "all 0.3s ease",
  },
  subCategoryImageBox: {
 
    marginBottom: "0.5rem",
    width:"100%",
    height:"120px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  subCategoryImage: {
   

   width:"100%",
  },
  subCategoryText: {
    fontWeight: 500,
    fontSize: "14px",
    margin: "0",
    color: "#082A45",
  },
  seeAllBox: {
    width: "45%",
    backgroundColor: "white",
    color: "black",
    padding: "1.5rem",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
  },
  seeAllText: {
   
    color: "#082A45",
    fontSize: "16px",
  },
};

