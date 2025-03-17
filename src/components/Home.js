import React from 'react';
import hero from "../assets/gowda.jpg";

function Home() {
  return (
    <section className='hero__container'>
      <div className='hero__content'>
        <h1 className='hero__title'>Hi, I'm Ravisha J H</h1>
        <p className='hero__description'>I'm a FullStack Developer</p>

        {/* Download CV Button */}
        <a href='/RAVISHA_J_H.pdf' download className='hero__contactBtn'>
          Download CV
        </a>
      </div>

      <img src={hero} className='hero__img' alt='Profile' />

      <div className='hero__topBlur'></div>
      <div className='hero__bottomBlur'></div>
    </section>
  );
}

export default Home;
