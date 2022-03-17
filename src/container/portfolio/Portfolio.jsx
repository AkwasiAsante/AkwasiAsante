import React from 'react';
import Work from '../../components/work/Work';
import './portfolio.css';
import google from '../../assets/globe.svg';
import WorkData from '../../components/workData';

const Portfolio = () => {
  return (
    <div className='mts__portfolio section__margin' id='portfolio'>
      <div className='mts__portfolio-heading'>
        <h1 className='gradient__text'>Portfolio - Works</h1>
        <div className='mts__portfolio-subtext'>
          <div className='mts__portfolio-card'>
            <div className='mts__portfolio-card_dot'></div>
            <div>
              <p>Design</p>
            </div>
          </div>
          <div className='mts__portfolio-card'>
            <div className='mts__portfolio-card_dot'></div>
            <div>
              <p>Build</p>
            </div>
          </div>
          <div className='mts__portfolio-card'>
            <div className='mts__portfolio-card_dot'></div>
            <div>
              <p>For Businesses</p>
            </div>
          </div>
          <div className='mts__portfolio-card'>
            <div className='mts__portfolio-card_dot'></div>
            <div>
              <p>Small & Large</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mts__portfolio-content'>
        {WorkData.map((data, index) => (
          <Work
            key={data.id}
            siteUrl={data.url}
            img={data.img}
            title={data.title}
            cat={data.cat}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
