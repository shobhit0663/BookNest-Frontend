import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
  
    // Function to add a product to the cart
    const addToCart = (product) => {
      alert('Book Added to Cart Successfully...!!!')
     
      setCartItems((prevItems) => {
          return [...prevItems, { ...product}];
        })
      };


      const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
      };


      return (
        <CartContext.Provider value={{ cartItems, setCartItems}}>
          {children}
        </CartContext.Provider>
      );
    };


