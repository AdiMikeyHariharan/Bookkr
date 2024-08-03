import React from 'react';
import Header from './Header';

export default function Carousel() {
  return (
    <div>
      {/* Wrapper for the Header */}
      <div className="pb-4">
        <Header />
      </div>
      
      {/* Wrapper for the Carousel with top margin */}
      <div className="w-100 mt-8"> {/* mt-8 adds margin-top, adjust as needed */}
        <div id="carouselExample" className="w-100 carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='./src/assets/dash.png' className="d-block w-100" alt="..." style={{ maxWidth: '100%', height: '250px' }}/>
            </div>
            <div className="carousel-item">
              <img src="https://images5.alphacoders.com/131/1319289.jpeg" className="d-block w-100" alt="..." style={{ maxWidth: '100%', height: '250px' }}/>
            </div>
            <div className="carousel-item">
              <img src="https://images5.alphacoders.com/131/1319289.jpeg" className="d-block w-100" alt="..." style={{ maxWidth: '100%', height: '250px' }}/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
