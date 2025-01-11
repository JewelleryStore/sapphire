import React from "react";
import "./App.css";
import ProductDisplay from "./components/productDisplay/ProductDisplay";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDisplay />
    </div>
  );
}

export default App;
