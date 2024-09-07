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
            <p className="about__description">
              To me, the most important thing about my future career is
              that I want to make a positive impact and help others with
              what I do. With my degree in Computer Science and Engineering
              along with my minor in Management Information Systems, I will
              be able to combine my technical full-stack coding skills and
              my knowledge in business and data analytics to drive meaningful
              and empowering change in the industry.
              <br></br>
              <br></br>
              In addition to technology, I am committed to empowering change in society through social
              justice and human rights activism. I am driven by empathy--it's what makes the world turn. Throughout my high
              school and college years, I have continued practicing emotional intelligence,
              learning to understand others through their lenses by realizing how one's past molds them into who they are in the present,
              educating myself on the world and its history, and have been very vocal
              in teaching others while gaining new perspectives by conversing with people
              spanning different ethnicities, genders, socioeconomic backgrounds,
              etc., and the intersectionality of identities. Every year, I try to grow more as a person, and learn more about the
              important issues that extend outside of my immediate bubble. I learned that, in order to grow, I must be comfortable
              being uncomfortable, and this is the key to widening my breadth and allowing my mind to understand empathy and others even more.
            </p>
            <a href={Resume} className="btn" target="_blank">Open Resume</a>
          </div>

          {/* <div className="about__skills grid">
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
          </div> */}
        </div>
      </div>

      <h3 className="section__title hobbies__title">In my free time...</h3>

      <AboutBox />
    </section>
  )
}

export default About