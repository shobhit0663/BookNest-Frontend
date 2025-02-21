import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import NavigationBar from "./navigationbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/feedback', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        window.alert('Feedback Done');
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    } catch (error) {
        window.alert('An error occurred!! Plz try Again');
        console.error('Registration error:', error);
    }
};

  return (
    <div className="contact-page">
      <NavigationBar></NavigationBar>
      <h1>Contact Us</h1>
      <p className="subtext">
        We’d love to hear from you! Whether you have a question about books, orders, or anything else, we’re here to help.
      </p>

      <div className="contact-container">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p> Mit College of engineering , dehu phata alandi - 442105  📍Pune  </p>
          <p> +91 7709769661</p>
          <p>support@shobhitbookstore.com</p>
          <p>Business Hours
                       Clearly mention your operating hours so customers know when to contact you.<br></br>
🕒 Business Hours:

Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 10:00 AM - 4:00 PM
Sunday: Closed</p>
        </div>
      </div>

      
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
       

<div className="faq">
  <h3>📖 How can I track my order?</h3>
  <p>Once your order is shipped, you will receive an email with a tracking number. You can use this tracking number to check your order status on our website under the "Track Order" section. If you face any issues, feel free to contact our support team.</p>
</div>

<div className="faq">
  <h3>💳 What payment methods do you accept?</h3>
  <p>We accept major credit and debit cards, PayPal, UPI, Net Banking, and digital wallets. All transactions are processed securely to ensure your payment details are safe. If you face any issues during checkout, please reach out to us.</p>
</div>

<div className="faq">
  <h3>🚚 Do you offer international shipping?</h3>
  <p>Yes, we provide worldwide shipping with multiple delivery options. Shipping costs and delivery times vary based on the destination country. You can view estimated delivery times at checkout before confirming your order.</p>
</div>

<div className="faq">
  <h3>📦 What should I do if I receive a damaged or incorrect book?</h3>
  <p>If you receive a damaged or incorrect book, please contact our support team within 7 days of delivery. Provide your order details and attach images of the issue. We will arrange for a replacement or refund as per our return policy.</p>
</div>

<div className="faq">
  <h3>🔄 Can I cancel or modify my order after placing it?</h3>
  <p>Orders can be canceled or modified within 24 hours of placement. If the order has already been shipped, cancellation may not be possible. Please reach out to our customer support team for assistance as soon as possible.</p>
</div>


      </div>
    </div>
    
    
  );
}

export default Contact;
