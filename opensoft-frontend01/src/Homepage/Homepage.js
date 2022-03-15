import React from "react";

import ProductCard from "../ProductCard";
import coverimage from "./coverimage.jpg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="cover">
        <img src={coverimage} alt="cover" className="cover-img" />
        <p className="subtitle">
          Getting your desired meal
          <br />
          just at your doorstep
          <br /> just a click away
        </p>
      </div>
      <div className="cat-intro">
        Check out the delicacies we have to offer:
      </div>
      <div className="category">
        <ProductCard product = {{productID: '1', title: 'Chole Bhature', description: 'Awesome meal from the heritage of Punjab', price: '25', image: './product1.jpg', count: 0}}/>
        <ProductCard product = {{productID: '2', title: 'Masala Dosa', description: 'Mouth watering speciality of South India', price: '45', image: './product2.jpg', count: 0}}/>
        <ProductCard product = {{productID: '3', title: 'Fried Rice', description: 'Have a taste of the fresh aromatic flavoured rice we offer', price: '70', image: './product3.jpg', count: 0}}/>
      </div>
    </div>
  );
};

export default Homepage;
