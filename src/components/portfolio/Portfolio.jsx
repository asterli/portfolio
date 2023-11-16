import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("C/C++")}>C/C++</span>
        <span className="work__item" onClick={() => filterItem("Python")}>Python</span>
        <span className="work__item" onClick={() => filterItem("Javascript/HTML/CSS")}>Javascript/HTML/CSS</span>
        <span className="work__item" onClick={() => filterItem("SQL/Databases")}>SQL/Databases</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, desc } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className="work__desc">{desc}</p>
              <a href={link} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio