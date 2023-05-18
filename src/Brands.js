import React from "react";
import "./css/BrandsStyle.css";
import data from "./BrandsArray.js";

export default function Brands() {
  console.log(data);

  return (
    <section id="brands-section">
            <h2><i>BRANDS</i> </h2>

      <div className="brands">

{data.map((x, index) => { return ( <div key={index}>
              <img src={x.logo} alt="err" />
              <h4>{x.BrandName}</h4>
            </div>
            );
        })}

      </div>
    </section>
  );    

}
