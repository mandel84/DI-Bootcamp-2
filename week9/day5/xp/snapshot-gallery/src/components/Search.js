import React, { useState } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';

function Search() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); // State for pagination

  // Function to handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    const API_KEY = 'tsJiJiAD1xfxPOqCkEXkNTA4lqjqqMjhzFb5AjSgbQUnphme58zr1YDH';  // Replace with your Pexels API key
    const response = await axios.get(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=30`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    setImages(response.data.photos);
  };

  // Function to go to the next page
  const nextPage = () => setPage((prevPage) => prevPage + 1);

  // Function to go to the previous page
  const prevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  // Return the component JSX
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ImageGallery images={images} />

      <div className="pagination">
        <button onClick={prevPage} disabled={page === 1}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default Search;
