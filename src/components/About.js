import React from 'react'
import aboutIcon from "../assets/aboutIcon.jpg"
import cusorIcon from "../assets/cursorIcon.png"
import serverIcon from "../assets/serverIcon.png"
function About() {
  return (
    <section className='about__container' id='about'>
        <h2 className='about__title'>About</h2>
        <div className='about__content'>
            <img src={aboutIcon} className='about__img'></img>
            <ul className='about__items'>
            <li className='about__item'>
                <img src={cusorIcon} alt=''></img>
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm frontend developer with Handson experince on MERN Stack and MVEN Stack</p>
                </div></li>
                <li className='about__item'>
                <img src={serverIcon} alt=''></img>
                <div>
                    <h3>Backend Developer</h3>
                    <p>I'm backed developer with Handson experince on JAVA and Spring Boot</p>
                </div></li>
                <li className='about__item'>
                <img src={serverIcon} alt=''></img>
                <div>
                    <h3>UI Design</h3>
                    <p>I'm UI design with Handson experince on Figma</p>
                </div></li>
            </ul>
        </div>
    </section>
  )
}

export default About