import React from 'react';
import './Prem.scss';
import bgImage from '../../Assets/images/BG.png';

const Prem = () => {
  return (
    <div className="Prem">
      <div className="container">
        <div className="Prem__box">
          <img src={bgImage} alt="Background" className="Prem__bg" />
          <div className="Prem__overlay" />
          <div className="Prem__content">
            <div className="Prem__text">
              <h2>Start your free trial today!</h2>
              <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
            </div>
            <button className="Prem__button">Start a Free Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prem;
