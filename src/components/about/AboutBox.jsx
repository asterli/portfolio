import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">63</h3>
                <span className="about__subtitle">Projects completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-emotsmile"></i>

            <div>
                <h3 className="about__title">368</h3>
                <span className="about__subtitle">Friends made along the way</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">877</h3>
                <span className="about__subtitle">Satisfied clients</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox