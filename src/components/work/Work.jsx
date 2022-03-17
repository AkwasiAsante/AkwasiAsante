import React from 'react';
import './work.css';

const Work = ({ siteUrl, title, img, cat }) => {
  return (
    <div className='mts_portfolio-container_work'>
      <div className='mts_portfolio-container_work-image'>
        <a href={siteUrl} target='_blank' rel='noopener noreferrer'>
          <img src={img} alt='imgUrl' />
        </a>
      </div>
      <div className='mts_portfolio-container_work-content'>
        <div>
          <a href={siteUrl} target='_blank' rel='noopener noreferrer'>
            <h3>{title}</h3>
          </a>
        </div>
        <p>{cat}</p>
      </div>
    </div>
  );
};

export default Work;
