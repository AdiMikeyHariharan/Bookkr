import React from 'react';
import Header from './Header';

export default function Carousel(props) {
  return (
    <div>
      <div className="pb-4">
        <Header url={props.url} status={props.status} />
      </div>
      
      <div className="w-100 mt-8">
        <div id="carouselExample" className="w-100 carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='./src/assets/dash.png' className="d-block w-100" alt="..." style={{ maxWidth: '100%', height: '250px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
