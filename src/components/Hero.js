import React from 'react';
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, <br />I'm Basirat Zehra</h1>
          <p className="subtitle">Full Stack Developer & Creative Problem Solver</p>
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">UI/UX</span>
          </div>
          <a href="#projects" className="btn">Explore My Work</a>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <div className="avatar-inner">
              <div
                className="avatar-img"
                style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/basirat.jpeg')` }}
              ></div>
              <div className="avatar-decor"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;