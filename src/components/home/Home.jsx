import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Aster Li</h1>
        <span className="home__education">I'm a junior studying Computer Science & Engineering.</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Get to know me!</a>
      </div>
    </section>
  )
}

export default Home