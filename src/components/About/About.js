import React from 'react';
import './About.css';
import img from '../../images/me.png';

function About() {
  return (
    <div className="about">
      <img src={img} alt="" className="about__image" />
      <div className="about__text">
        <h2 className="content-title about__title">About the author</h2>
        <p className="content-text about__description">
          My name is Marina Manelis. I am a full stack developer looking for new job opportunities.
        </p>
        <p className="content-text about__description">
          My stack: HTML/CSS, React, express, mongoDB, nodeJS.
        </p>
        <p className="content-text about__description">
          Thanks to Yandex Practicum for polishing things I knew before and learning a lot of new.
        </p>
      </div>
    </div>
  );
}

export default About;
