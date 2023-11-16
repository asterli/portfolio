import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-aster-2.png";
import AboutBox from './AboutBox';
import Resume from "../../assets/AsterLiResume.pdf";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">As a first-generation, Computer Science and Engineering student, I am thrilled to learn more about how I can use computer software and integration to make a positive impact. Experienced in front-end development, I have built WordPress plugins that enhance newsrooms' capability of auditing diversity and inclusion in their sources. Proficient in various programming languages, I thrive on leveraging technology to help others in the future. I will be looking forward to contributing my skills to a dynamic team and driving meaningful change within the industry.</p>
            <a href={Resume} className="btn" target="_blank">Download Resume</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Time Management and Organization</h3>
                <span className="skills__number">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage time__management"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="section__title hobbies__title">In my free time...</h3>

      <AboutBox />
    </section>
  )
}

export default About