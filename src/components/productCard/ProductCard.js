// ProductCard.js
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star"; // Import filled star icon
import styles from "./ProductCard.module.css";
import ColorPicker from "../colorPicker/ColorPicker";
import { COLORS } from "../../constants/colors";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("yellow");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const scaledScore =
    product.popularityScore && !isNaN(product.popularityScore)
      ? parseFloat((product.popularityScore * 5).toFixed(2))
      : 0;

  // Function to capitalize the first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className={styles.productImage}
      />
      <span className={styles.productName}>{product.name}</span>
      <span className={styles.productPrice}>${product.price} USD</span>
      <ColorPicker
        colors={Object.keys(COLORS)}
        onColorChange={handleColorChange}
        selectedColor={selectedColor}
      />
      <span className={styles.selectedColorName}>
        {`${capitalizeFirstLetter(selectedColor)} Gold`}
      </span>
      <div className={styles.popularityStars}>
        <Rating
          name="half-rating-read"
          value={scaledScore}
          precision={0.01}
          readOnly
          emptyIcon={
            <StarIcon style={{ color: "#D9D9D9" }} fontSize="inherit" />
          }
          classes={{
            iconFilled: styles.iconFilled,
          }}
        />
        <span className={styles.scoreText}>{`${scaledScore}/5`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
