import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import Carousel from "../carousel/Carousel";
import styles from "./ProductDisplay.module.css";
import ProductCard from "../productCard/ProductCard";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(config.apiEndpoint + "/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className={styles.productDisplay}>
      <Carousel>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDisplay;
