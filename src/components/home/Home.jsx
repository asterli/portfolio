import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-aster-1.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Aster Li</h1>
        <span className="home__education">Computer Science & Engineering, Management Information Systems</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Get In Touch
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home