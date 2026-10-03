import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';
import React from 'react';
import Projects from './Projects';

const Portfolio: React.FC = () => {
  return (
  <div className="App">
    <nav className="site-nav" aria-label="Main navigation">
      <a className="wordmark" href="#landing" aria-label="Zuzana Kecskes — home">Zuzana<span>.</span></a>
      <div><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a></div>
    </nav>
    <main>
      <header id="landing" className="hero hero-personal">
        <div className="hero-copy">
          <p className="hero-greeting">A LITTLE INTRODUCTION</p>
          <h1>I’m <span>Zuzana.</span></h1>
          <p className="hero-tagline">Building useful things.<br /><em>Learning along the way.</em></p>
          <p className="hero-intro">I turn ideas into practical digital projects, with a focus on the people who will actually use them.</p>
          <div className="hero-actions"><a className="primary-link" href="#projects">Explore my projects <span aria-hidden="true">↗</span></a><a className="plain-link" href="#about">A little about me</a></div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame"><img src="./images/profile-photo.jpg" alt="Zuzana Kecskes outdoors in a sunlit woodland" /></div>
          <figcaption><span>Always learning, always exploring.</span></figcaption>
        </figure>
      </header>
      <section id="projects" className="work-section section-container">
        <div className="section-heading"><div><p className="eyebrow">A FEW THINGS I’VE BUILT</p><h2>Small projects.<br /><span>Lots of discoveries.</span></h2></div><p>A collection of web projects that helped me turn new ideas into working experiences.</p></div>
        <Projects />
      </section>
      <section id="about" className="about-section">
        <div className="about-layout section-container">
          <div><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h2>People first.<br /><span>Then the technology.</span></h2></div>
          <div className="about-copy">
            <p>I’m interested in how technology and digital systems can make things work better for the people who use them. Over the past year, I’ve been building small web projects to explore modern web development and understand how digital tools are designed and built.</p>
            <p>I also explore AI-assisted development: using thoughtful prompting to debug, compare approaches, and understand new concepts. It helps me experiment with ideas and deepen my understanding of development workflows.</p>
            <p>Before moving into technology, I worked in customer-facing and leadership roles, managing teams and helping people solve problems. That experience shapes how I approach technology—with a focus on usability, communication, and the people behind the systems.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section section-container">
        <p className="eyebrow">LET’S CONNECT</p><h2>Good things start<br />with a conversation<span>.</span></h2>
        <a className="primary-link" href="mailto:zbojova@gmail.com">Say Hello <span aria-hidden="true">↗</span></a>
        <div className="contact-links"><a href="https://github.com/suz91ka" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/zuzanakecskes/" target="_blank" rel="noreferrer">LinkedIn</a></div>
      </section>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Zuzana Kecskes</span><a href="#landing">Back to top ↑</a></footer>
  </div>
  );
};
export default Portfolio;
