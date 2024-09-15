import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';

function Category({ category }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const API_KEY = 'tsJiJiAD1xfxPOqCkEXkNTA4lqjqqMjhzFb5AjSgbQUnphme58zr1YDH';
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${category}&per_page=30`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      setImages(response.data.photos);
    };

    fetchImages();
  }, [category]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Pictures</h2>
      <ImageGallery images={images} />
    </div>
  );
}

export default Category;
