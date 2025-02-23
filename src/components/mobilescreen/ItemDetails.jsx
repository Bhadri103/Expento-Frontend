import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../constants/category";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {

    let foundItem = null;
    categories.forEach((category) => {
      category.subCategories.forEach((subCategory) => {
        const matchedItem = subCategory.items?.find(
          (item) => item.id.toString() === itemId
        );
        if (matchedItem) foundItem = matchedItem;
      });
    });

    if (foundItem) {
      setItem(foundItem);
    }
  }, [itemId]);

  if (!item) return <p>Item not found.</p>;

  return (
    <div style={styles.container}>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={styles.image} />
      <p>{item.description}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },
};

export default ItemDetails;
