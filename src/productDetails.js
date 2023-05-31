import React from "react";
import { Link,useParams } from "react-router-dom";
import products from './ProductsArray';
import Product from "./Product";
export default function ProductD(){

    const params=useParams()
    const ProduitTrouvé=products.find (p=> p.productName===params.productName)
    return(
        <div className="Procontainer">
{ProduitTrouvé? 
         <Product productName={ProduitTrouvé.productName}
         productImage={ProduitTrouvé.productImage} productPrice={ProduitTrouvé.productPrice}  />
               :"aucun produit trouvé"}
    <Link to='/Shop'> retour à la page d'accueil</Link>
        </div>
    )
}