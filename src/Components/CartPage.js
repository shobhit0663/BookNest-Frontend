// src/pages/CartPage.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import './CartPage.css';
import { CartContext } from '../Components/CartContext';
import { Card, Button } from 'react-bootstrap';
import NavigationBar from './navigationbar';


const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Function to remove item from cart
  function removeFromCart(title) {
    setCartItems(cartItems.filter(book => book.title !== title));
  }

  // Function to calculate total price of items in cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const placeorder = async () => {
    const totalAmount = parseFloat(getTotalPrice) * 100; // Convert to paise
  
    // Ensure Razorpay script is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }
  
    const options = {
      key: "rzp_test_ERtmXZSGZ70qn7", // Replace with your Razorpay Key ID
      amount: getTotalPrice()*100,
      currency: "INR",
      name: "Ecommerce ",
      description: "Purchase Order",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        // navigate('/order', { state: { cartItems, total: getTotalPrice() } });
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      theme: {
        color: "#3399cc",
      }
    };
  
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div className="cart-page">
      <NavigationBar></NavigationBar>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="card-container">
            {cartItems.map((item) => (
              <Card className="card" key={item.id}>
                <Card.Img variant="top" src={item.coverPhotoURL} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.author} <br />
                    ${item.price.toFixed(2)}
                  </Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(item.title)}>
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          
          {/* Total Price Section */}
          <div className="total-price">
            <h4>Total Price: ${getTotalPrice()}</h4>
            <Button variant="success" className="proceed-btn" onClick={placeorder}>
              Proceed to Pay
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
