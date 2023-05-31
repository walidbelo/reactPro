import React from "react"
import { useState } from "react";
import Men from "./categories/Men";
//import products from "./ProductsArray";

export default function Cart(){
    const [panier, setPanier] = useState([]);

    function CheckPanier(p){
        if ( panier.find(x=>x.id===p.id)==null)
        setPanier([...panier, p])
          else 
          alert(" ce produit exite déjà dans votre panier")
      
      }
      return(
    <div className="CartArea">
        <h4>Your Cart:</h4>
        <div>
            {
                panier.map((n)=>{return(<div>
                <li>{n.productName}</li>
                <li>{n.productPrice}</li>
                </div>
               )} )
            }
        </div>
        <div className="total">
          <h3>{panier.reduce ((som, p)=>
       {    return    som+=(p.productPrice) ;},0)}   dhs</h3>
        </div>
    </div>
)}
