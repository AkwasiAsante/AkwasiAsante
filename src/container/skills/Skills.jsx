import React from 'react';
import './skills.css';
import globe from '../../assets/globe.svg';
import csharp from '../../assets/skills/csharp.svg';
import css from '../../assets/skills/css.svg';
import html5 from '../../assets/skills/html5.svg';
import js from '../../assets/skills/js.svg';
import reactjs from '../../assets/skills/reactjs.svg';
import vbnet from '../../assets/skills/vbnet.svg';
import Skill from '../../components/skill/Skill';

const Skills = () => {
  return (
    <div className='mts__skills section__padding' id='skills'>
      <h1 className='gradient__text'>My Skills</h1>
      <div className='mts__skills-content'>
        <div className='mts__skills-content_left'>
          <img src={globe} alt='globe' />
          <p>
            Moving along with modern and advance technologies is always a
            priority to me. For this reason I use morden technologies in
            developing applications. Here are some of my technical skills given
            below.
          </p>
        </div>
        <div className='mts__skills-content_right'>
          <Skill icon={css} title='CSS3' progress='89%' bg='#F56692' />
          <Skill icon={html5} title='HTML5' progress='90%' bg='#6BBE92' />
          <Skill icon={reactjs} title='ReactJs' progress='91%' bg='#545496' />
          <Skill icon={csharp} title='C#' progress='95%' bg='#f74839' />
          <Skill icon={js} title='Javascript' progress='86%' bg='#640211' />
          <Skill icon={vbnet} title='VB.Net' progress='70%' bg='slateblue' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
