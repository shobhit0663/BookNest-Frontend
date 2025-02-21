import React, { useState } from 'react';
import axios from 'axios';
import './ADD.css';

const Addbook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    photoCopyUrl: '',
    isbnNumber: '',
    price: '',
    language: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:8080/bookapi/addbook', formData);
      window.alert('Congratulations!!! Your Book has been added successfully.');
      setFormData({
        title: '',
        author: '',
        photoCopyUrl: '',
        isbnNumber: '',
        price: '',
        language: ''
      });
    } catch (e) {
      window.alert('An error occurred:', e);
    }
  };

  return (
    <div className="addbook-container">
      <form onSubmit={handleSubmit} className="addbook-form">
        <h1 className="form-title">Add Your Book</h1>

        <div className="form-group">
          <label htmlFor="title" className="form-label">Title :</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="form-label"> Author's Name :</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-input"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverPhotoUrl" className="form-label">Cover Photo URL </label>
          <textarea
            id="coverPhotoUrl"
            name="coverPhotoUrl"
            className="form-input"
            placeholder="(Image URL)"
            value={formData.coverPhotoUrl}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="isbnNumber" className="form-label">ISBN Number :</label>
          <input
            type="text"
            id="isbnNumber"
            name="isbnNumber"
            className="form-input"
            placeholder="Enter ISBN"
            value={formData.isbnNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price" className="form-label">Price :</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-input"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="language" className="form-label">Language</label>
          <input
            type="text"
            id="language"
            name="language"
            className="form-input"
            placeholder="Enter language"
            value={formData.language}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
};

export default Addbook;
