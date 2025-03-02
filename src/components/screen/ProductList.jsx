import React from 'react'
import "../../styles/subCategories.css";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCards from '../ProductCards';
import { FaSort, FaFilter } from "react-icons/fa";

const products = [
  {
      id: 1,
      name: "Hooded Puffer Jacket",
      description: "Trond Men's Regular Fit",
      image: require("../../images/products/img-8.png"),
      price: 4999,
      originalPrice: 5000,
      discount: "18% Off",
      rating: 5.0,
  },
  {
      id: 2,
      name: "Winter Jacket",
      description: "Warm and cozy",
      image: require("../../images/products/img-9.png"),
      price: 3999,
      originalPrice: 4500,
      discount: "12% Off",
      rating: 4.5,
  },
  {
      id: 3,
      name: "Hooded Puffer Jacket",
      description: "Trond Men's Regular Fit",
      image: require("../../images/products/img-8.png"),
      price: 4999,
      originalPrice: 5000,
      discount: "18% Off",
      rating: 5.0,
  },
  {
      id: 4,
      name: "Winter Jacket",
      description: "Warm and cozy",
      image: require("../../images/products/img-9.png"),
      price: 3999,
      originalPrice: 4500,
      discount: "12% Off",
      rating: 4.5,
  },
    {
      id: 5,
      name: "Winter Jacket",
      description: "Warm and cozy",
      image: require("../../images/products/img-9.png"),
      price: 3999,
      originalPrice: 4500,
      discount: "12% Off",
      rating: 4.5,
  },

];
export default function ProductList() {
  return (
    <>
      <TopBar />
      <ProductCards products={products} />
      <BottomBar />
    </>
  )
}


const TopBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  return (
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
              <span className="title">Mens</span>
          )}

          <FaSearch className="icon" onClick={() => setIsSearching(true)} />
      </div>
  )
};


const BottomBar = () => {
  return (
    <div className="fixed-bottom bg-light py-2 border-top">
      <div className="container d-flex justify-content-between px-5 py-1 align-items-center">
        <div className="d-flex align-items-center gap-2 fw-bold">
          <FaSort />
          <span>Sort</span>
        </div>
        <div className="border-start border-dark" style={{ height: "30px" }}></div>
        <div className="d-flex align-items-center gap-2 fw-bold">
          <FaFilter />
          <span>Filter</span>
        </div>
      </div>
    </div>
  );
};