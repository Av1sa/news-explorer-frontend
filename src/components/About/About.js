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
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="content-text about__description">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
