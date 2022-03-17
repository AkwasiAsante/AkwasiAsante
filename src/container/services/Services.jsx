import React from 'react';
import { Feature } from '../../components';
import './services.css';
import globe from '../../assets/globe.svg';
import iphone from '../../assets/iphone.svg';
import mobileIcon from '../../assets/mobileIcon.svg';
import software from '../../assets/software.svg';
import websiteIcon from '../../assets/websiteIcon.svg';

const Services = () => {
  return (
    <div className='mts__services section__margin' id='services'>
      <div className='mts__services-feature'>
        <Feature
          // icon={globe}
          title='My Services'
          text='Taking Your Website and Apps Projects To New Heights. Passion for designs goes beyond beautiful imagery, Good design should always solve a problem. 
          Professional design in websites, web application, custom software for businesses and also provide software solutions.'
        />
      </div>
      <div className='mts__services-container'>
        <Feature
          icon={mobileIcon}
          title='Web Development'
          text='Modern UI. Responsive Design. Mobile Responsive.'
        />
        <Feature
          icon={software}
          title='Software Development'
          text='Save Energy. Save Time. Save Money. Complete digital solutions, from investigation to celebration'
        />
        <Feature
          icon={websiteIcon}
          title='Designs'
          text='UI/UX Designs. Graphic Design. Web Design. Anything Design.'
        />
      </div>
    </div>
  );
};

export default Services;
