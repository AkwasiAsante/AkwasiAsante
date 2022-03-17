import React from 'react';
import './skill.css';

const Skill = ({ icon, title, progress, bg }) => {
  return (
    <div>
      <div className='mts__skills-card'>
        <img src={icon} alt='css' />
        <div className='mts__skills-card_content'>
          <div className='mts__skills-card_title'>
            <p>{title}</p>
            <p>{progress}</p>
          </div>
          <div className='mts__skills-progress'>
            <div
              className='mts__skils-progress_bar'
              style={{ background: bg, width: progress }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
