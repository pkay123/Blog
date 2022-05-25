import React from "react";
import "../styles/components/Destination.css";
import { country } from "../data";

function Destination() {
  return (
    <div className="app__destination">
      <div className="container">
        <h2 className="title">World Top Destinations</h2>
        <div className="destination__grid">
          {country.map((item) => (
            <div className="destination__content">
              <img src={item.img} alt="" className="destination__img" />

              <div className="content">
                <p className="subtitle">{item.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;
