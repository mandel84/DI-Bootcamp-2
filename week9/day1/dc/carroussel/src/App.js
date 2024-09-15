import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src="https://cdn.britannica.com/75/156475-050-D97BBA64/Skyline-Hong-Kong.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/921519372/photo/city-skyline-at-sunset-macau.jpg?s=612x612&w=0&k=20&c=M1suZpBd7F1-obBZUT-Lho552CZsA0kJQ47aLjrFmtw=" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://att-japan.net/wp-content/uploads/2023/06/pixta_97309535_M.webp" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://content.paulreiffer.com/wp-content/uploads/2023/02/Featured-Image-Las-Vegas-Strip-Bellagio-Fountains-Paris-Hotel-Ballys-PH-High-Roller-Night-Cityscape-Viewpoint-Location-Paul-Reiffer-Nevada@2x.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
