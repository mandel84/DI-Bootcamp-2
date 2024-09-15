import React from 'react';
import './ImageGallery.css';

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="image-container">
          <img src={image.src.medium} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
