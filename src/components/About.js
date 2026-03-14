import React from 'react';
import { FiCode, FiLayout, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <motion.p className="about-text" variants={itemVariants}>
            I am a passionate Full Stack Developer with a knack for building responsive and user-centric web applications. 
            With a strong foundation in computer science and a love for design, I blend technical expertise with creative 
            solutions to deliver impactful digital experiences.
          </motion.p>
          <motion.div className="skills" variants={itemVariants}>
            <h3>My Expertise</h3>
            <div className="skills-grid">
              <motion.div className="skill-card" variants={itemVariants}>
                <div className="skill-icon-wrapper">
                  <FiCode size={36} />
                </div>
                <h4>Languages</h4>
                <p>Java, Python, JavaScript, C, SQL</p>
              </motion.div>
              <motion.div className="skill-card" variants={itemVariants}>
                <div className="skill-icon-wrapper">
                  <FiLayout size={36} />
                </div>
                <h4>Web Tech</h4>
                <p>React, Node.js, Express, HTML, CSS</p>
              </motion.div>
              <motion.div className="skill-card" variants={itemVariants}>
                <div className="skill-icon-wrapper">
                  <FiSmartphone size={36} />
                </div>
                <h4>Databases</h4>
                <p>MySQL, PostgreSQL, JDBC</p>
              </motion.div>
              <motion.div className="skill-card" variants={itemVariants}>
                <div className="skill-icon-wrapper">
                  <FiCode size={36} />
                </div>
                <h4>Design</h4>
                <p>Canva, Photoshop, Illustrator</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;