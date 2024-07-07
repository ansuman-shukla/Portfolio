import React from 'react';
import './About.css';
import ME from '../../assests/me.png';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="A headshot of Ansuman"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiMedal className='about__icon'/>
                        <h5>Experience</h5>
                        <small>Built small <br /> projects</small>
                    </article>
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>Scaler School of Technology <br/> Computer Science</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Traveling, Basketball ,Coding & exploring LLM's</small>
                    </article>
                </div>
                <p>
                    I am a  Computer Science 
                    major at Scaler School of Technology! I am currently pursuing a career as a Software
                    Engineer. I have a strong passion for both front-end
                    and back-end development. I love to learn and I am always looking to learn
                    and experiment with new technologies!
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  );
}

export default About;