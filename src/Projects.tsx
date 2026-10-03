import React from 'react';
import './Projects.css';

const projects = [
  { title: 'Random Quote', image: './images/quote.png', description: 'A small moment of inspiration, built for the web.', live: 'https://suz91ka.github.io/random-quote-machine/', repo: 'https://github.com/suz91ka/random-quote-machine', category: 'INTERACTIVE WEB APP' },
  { title: 'Calculator', image: './images/calculator.png', description: 'Exploring logic and interaction through an everyday tool.', live: 'https://suz91ka.github.io/calculator/', repo: 'https://github.com/suz91ka/calculator', category: 'EVERYDAY TOOLS' },
  { title: 'Jokes Website', image: './images/vtipy.png', description: 'A playful project with a simple goal: a little laughter.', live: 'https://suz91ka.github.io/vtipy/', repo: 'https://github.com/suz91ka/jokes-website', category: 'WEB EXPERIENCE' },
];

const Projects: React.FC = () => (
  <div className="project-grid">
    {projects.map((project, index) => (
      <article className="project-item" key={project.title}>
        <a className={`project-preview preview-${index}`} href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}><img src={project.image} alt={`${project.title} project screenshot`} /></a>
        <p className="project-category">{project.category}</p>
        <h3><a href={project.live} target="_blank" rel="noreferrer">{project.title}</a></h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live demo</a><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code on GitHub`}>View code</a></div>
      </article>
    ))}
  </div>
);
export default Projects;
