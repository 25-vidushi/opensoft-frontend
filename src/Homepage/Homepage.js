import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
/*import BlogList from "../indRestaurant"; */

import coverimage from "./coverimage.jpg";
import "./Homepage.css";

const Homepage = () => {

  const [restaurant, setRestaurant]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:8000/restaurants')
    .then(res=>{
      return res.json()
    })
    .then((data)=>{
       console.log(data)
       setRestaurant(data)
    });
  },[]);
  

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
        Check out the restaurants you like for order:
      </div>
      <div className="post">
       
      {restaurant && restaurant.map(restaurant=>(
                    <div className="post-preview" key={restaurant.id}>
                        <Link to={`/restaurants/${restaurant.id}`}>
                        <h2>{ restaurant.restname }</h2>
                        <p>Ratings : { restaurant.rating }</p>
                        <p>Total_Ratings : { restaurant.totalRating }</p>
                        <p>Open Time : { restaurant.openTime }</p>
                        <p>Close Time: { restaurant.closeTime }</p>
                        </Link>
                         
                        </div>
                ))}{/*
        {restaurant && <BlogList restaurant={restaurant} title="All Restaurants"   />}
                      */}
  </div>
    </div>
  );
};

export default Homepage;
