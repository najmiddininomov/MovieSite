import React from "react";
import { NavLink } from "react-router-dom";
import "./Plan.scss";
const data = [
  {
    id: 1,
    title: "Basic Plan",
    disc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "$9.99",
  },
  {
    id: 2,
    title: "Standard Plan",
    disc: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    price: "$12.99",
  },
  {
    id: 3,
    title: "Premium Plan",
    disc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    price: "$14.99",
  },
];
const Plan = () => {
  return (
    <div className="Plan">
      <div className="container">
        <div className="plan-info">
          <div>
            <h2>Choose the plan that's right for you</h2>
            <p>
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
          </div>
          <div className="planBtns">
              <button className="month active">Monthly</button>
              <button className="year ">Year</button>
          </div>
        </div>
        <div className="Plan-cards">
          {data.map((items) => (
            <div className="card" key={items.price}>
              <div className="title">{items.title}</div>
              <p className="disc">{items.disc}</p>
              <p className="price">{items.price} <span>/month</span></p>
            <div className="priceBtns">
              <button className="free">Start Free Trial</button>
              <button className="notFree">Choose Plan</button>
            </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Plan;
