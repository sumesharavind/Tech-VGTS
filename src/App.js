import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ProductDetailPage from "./Components/ProductDetailPage";
import Orders from "./Components/Orders";
import CategoryPage from "./Components/CategoryPage";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Home /> 
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:productName" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default App;
