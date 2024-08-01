import React, { useState } from 'react';
import './FlipCard.css'; 
import Header from './components/Header'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
    <Header/>
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input
            type="checkbox"
            className="toggle"
            checked={isFlipped}
            onChange={handleToggle}
          />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className={`flip-card__inner ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" action="">
                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                <button className="flip-card__btn">Let's go!</button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" action="">
                <input className="flip-card__input" placeholder="Name" type="text" />
                <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                <input className="flip-card__input" name="number" placeholder="Phone No" type="tel" />
                <input className="flip-card__input" name="gender" placeholder="Gender" type="text"/>
                <input className="flip-card__input" name="dob" placeholder="dob" type="date"/>
                <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                <input className="flip-card__input" name="confirmPassword" placeholder="Confirm Password" type="password"/>
                
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
    </div>
  );
};

export default FlipCard;
