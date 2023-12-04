import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-game-controller"></i>

            <div>
                <h3 className="about__title">30+</h3>
                <span className="about__subtitle">Video games played. I love gaming with my friends and trying different games! I also play for an all-female collegiate Valorant team where I have built meaningful friendships and honed my teamwork skills. I also love being able to uplift the spirits of women who love gaming but feel discouraged to do so in this industry.</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-music-tone-alt"></i>

            <div>
                <h3 className="about__title">20+</h3>
                <span className="about__subtitle">Concerts attended. I love listening to music and going to concerts to support my favorite artists. I listen to all kinds of music genres and in different languages, too. My favorite genres at the moment are R&B and hip hop.</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">5</h3>
                <span className="about__subtitle">Years I have danced. I started taking hip hop classes junior year of high school after my friend inspired me through her dance show performance. I love being able to listen to my favorite music and have fun! My favorite part of hip hop is that it is very free and expressive.</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">7</h3>
                <span className="about__subtitle">Countries visited. I love going to new places and meeting new people. Talking to locals is always so fascinating and I enjoy hearing stories about others' lives. Some countries on my bucket list are South Korea, Italy, and Singapore. In my free time, I also love learning new languages and have studied four so far!</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox