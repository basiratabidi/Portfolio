import React from 'react';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Academic Records System', 
      description: 'A React-based e-commerce platform with cart functionality.',
      tags: ['React', 'Redux', 'Node.js'],
      image: 'project1.jpg',
      liveDemo: 'https://example.com/academic-records',
      sourceCode: 'https://github.com/basiratabidi/academic-records'
    },
    { 
      id: 2, 
      title: 'Weather Dashboard', 
      description: 'Real-time weather app with geolocation features.',
      tags: ['JavaScript', 'API', 'CSS3'],
      image: 'project2.jpg',
      liveDemo: 'https://example.com/weather-dashboard',
      sourceCode: 'https://github.com/basiratabidi/weather-dashboard'
    },
    { 
      id: 3, 
      title: 'Task Manager', 
      description: 'Drag-and-drop productivity tool with Firebase integration.',
      tags: ['React', 'Firebase', 'Material UI'],
      image: 'project3.jpg',
      liveDemo: 'https://example.com/task-manager',
      sourceCode: 'https://github.com/basiratabidi/task-manager'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-subtitle">Showcasing my latest work and innovations</p>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/${project.image}')` }}></div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.liveDemo} className="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.sourceCode} className="btn-outline" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;