import  React ,{createContext ,useState}  from "react";
import products from './ProductsArray';
export const ShopContext=createContext(null);

function getDefaultCart(){
    let cart={};
    for(let i=1;i<products.length;i++){
        cart[i]=0;
    }
return cart
}

export default function ShopContextProvider(props){
    const [cartItems, setCartItems]=useState(getDefaultCart());
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    };
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    };
    const contextValue={cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
};