
import React, { useState } from 'react';
import axios from 'axios';
// import './delete.css';


const Delete = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        photoCopyUrl:'',
        isbnNumber:'',
        price:'',
        language: '',
        
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
        try{
            if(formData.clientPassword===formData.confirmPassword){
            axios.post('http://localhost:8080/deletebook/{id}',formData)

            window.alert('Delete Successful...')
            setFormData({
                title: '',
                author: '',
                photoCopyUrl:'',
                isbnNumber:'',
                price:'',
                language: '',
            })}
        }catch(e){
            window.alert('an error',e)
        }
        // console.log('Form submitted:', formData);
    };

    return (
                <div>
                    <h1>Delete Information</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="enter title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="author">Enter Author's Name </label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="clientAddress">coverPhotoURL</label>
                            <textarea
                                id="coverPhotoURL"
                                name="coverPhotoURL"
                                placeholder="(image)"
                                value={formData.coverPhotoUrl}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="clientContactNo">isbnNumber</label>
                            <input
                                type="text"
                                id="isbnNumber"
                                name="isbnNumber"
                                placeholder="Enter Book Number "
                                value={formData.isbnNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="clientEmail">price</label>
                            <input
                                type="email"
                                id="price"
                                name="price"
                                placeholder="Enter price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="clientPassword">language</label>
                            <input
                                type="password"
                                id="language"
                                name="language"
                                placeholder="language"
                                value={formData.language}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Delete</button>
                    </form>
                    
                </div>
    );
};

export default Delete;