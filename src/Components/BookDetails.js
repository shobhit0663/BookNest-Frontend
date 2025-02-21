import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './BookDetails.css';

const Bookdetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book; // Ensure safe access

  if (!book) {
    return <h2>No book details available</h2>;
  }

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="book-details-container">
      <img src={book.coverPhotoURL} alt={book.title} className="book-cover"  style={{height:'300px', width:'400px'}}/>
      <h2 className="book-title">{book.title}</h2>
      <h4 className="book-author">{book.author}</h4>
      <p className="book-description">{book.description}</p>
      <p className="book-language"><strong>Language:</strong> {book.language}</p>
      <p className="book-price"><strong>Price:</strong> ₹{book.price}</p>
      <button className="back-button" onClick={handleGoBack}>Back</button>
      
    </div>
  );
};

export default Bookdetails;
