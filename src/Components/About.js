import React from 'react';
import './About.css';
import NavigationBar from './navigationbar';
const AboutUs = () => {
  return (
    <div className="about-us-container">
       <NavigationBar/>
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
        <h1><p>Welcome to Our Online Bookstore, Your Gateway to Amazing Books!</p></h1>
      </header>

      {/* Hero Image */}
      <section className="about-hero">
        <img
          className="hero-image"
          src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us"
        />
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
          We are an online bookstore dedicated to bringing the joy of reading to everyone.
           Our collection spans across genres, from timeless classics to the latest bestsellers, 
           ensuring that every reader finds their perfect book. We believe in the power of stories to inspire, 
           educate, and transform lives. Our mission is to create a seamless and enjoyable book-shopping experience, 
           offering handpicked selections, personalized recommendations, and exceptional customer service. 
           Whether you're a passionate reader or just beginning your literary journey, we're here to help you explore, discover, and fall in love with books all over again. 
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-list">
        <div className="value-card">
  <h3>Customer First</h3>
  <p>We prioritize our customers by providing excellent service and personalized recommendations.  
     Our goal is to create a seamless and enjoyable shopping experience.  
     We listen to feedback and continuously improve to meet customer needs.  
     Your satisfaction is our top priority at every step.  
     We are committed to building long-term relationships with our readers.</p>
</div>

<div className="value-card">
  <h3>Quality</h3>
  <p>We offer books from the most trusted authors and publishers.  
     Every book is carefully selected to ensure authenticity and excellence.  
     Our collection spans multiple genres, catering to diverse reading preferences.  
     We believe in delivering only the best content to our customers.  
     Quality is at the core of everything we offer.</p>
</div>

<div className="value-card">
  <h3>Convenience</h3>
  <p>We make book shopping simple and hassle-free for our customers.  
     Our website is designed for easy navigation and smooth transactions.  
     Fast delivery ensures you receive your books quickly.  
     Multiple payment options provide flexibility and ease of purchase.  
     We aim to enhance your experience with every order.</p>
</div>

        </div>
      </section>

      {/* Blogs Section */}
      <section className="about-blogs">
        <h2>From Our Blog</h2>
        <div className="blog-list">
          <div className="blog-card">
            <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="Blog 1" />
            <div className="blog-details">
              <h3>Top 10 Books to Read in 2025</h3>
              <p>Get ready for an amazing reading journey with these bestsellers.  
                  From thrilling mysteries to inspiring self-help, there's something for everyone.  
                  Discover books that will captivate your imagination and expand your knowledge.  
                  Stay ahead with the most anticipated releases of the year.  
                  Whether you love fiction or non-fiction, these books are a must-read.  
                  Start your reading adventure today and explore new perspectives!</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://plus.unsplash.com/premium_photo-1685287731561-bee75040e1bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMHBlbnxlbnwwfHwwfHx8MA%3D%3D" alt="Blog 2" />
            <div className="blog-details">
              <h3>The Impact of Books on Personal Growth</h3>
              <p><h3>The Impact of Books on Personal Growth</h3>
                  <p>Books have the power to transform your life by broadening your perspective.  
                    They provide knowledge, inspiration, and motivation for self-improvement.  
                    Reading enhances critical thinking and boosts creativity.  
                    Stories help develop empathy and emotional intelligence.  
                    Learning from great authors can shape your mindset and habits.  
                    Explore how books can guide you toward a better version of yourself.</p>
                  
</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; 2025 Online Bookstore. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
