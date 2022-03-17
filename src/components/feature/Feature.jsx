import React from 'react';
import './feature.css';

const Feature = ({ title, text, icon }) => {
  return (
    <div className='mts__features-container__feature'>
      <div className='mts__features-container__feature-title'>
        {icon ? <img src={icon} alt='icon' /> : null}
        <>
          <div />
          <h1>{title}</h1>
        </>
      </div>
      <div className='mts__features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
