import React from 'react';
import './About.css';
import img from '../../images/me.png';

function About() {
  return (
    <div className="about">
      <img src={img} alt="About img" className="about__image" />
      <div className="about__text">
        <h2 className="content-title about__title">About the author</h2>
        <p className="content-text about__description">
          My name is Marina Manelis, and this is my diploma project at Yandex
          Practicum 10-month course.
        </p>
        <p className="content-text about__description">
          The stack used: HTML/CSS, React, express, mongoDB, nodeJS.
        </p>
      </div>
    </div>
  );
}

export default About;
