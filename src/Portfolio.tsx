import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Portfolio.css';


import React, { useRef } from 'react';
import { useTypingEffect } from "./useTypingEffect";
import Projects from './Projects';

const App: React.FC = () => {
  const typingRef = useRef<HTMLHeadingElement | null>(null);

  // Must pass the ref itself, not .current
  useTypingEffect(" I am Zuzana Kecskes", typingRef, 100);

  return (
    <div className="App ">
      {/* LANDING / FIRST PAGE */}
      <header
        id="landing"
        className="header vh-100 text-center position-relative bg-light"
      >
        <div
          className="
      text-container
      d-flex
      flex-column
      justify-content-center
      align-items-center
      text-center
      h-100
      px-4
      px-md-5
      gap-2 gap-md-3
    "
        >

          <h5 className="text-headings section-title fw-bold text-uppercase">
            Welcome
          </h5>

          <h1
            id="typing-text"
            ref={typingRef}
            className="fw-bold display-5 display-md-2 display-lg-1"
          >
            {/* typing text */}
          </h1>

          <h6
            className="
        roles
        text-muted
        no-wrap
      "
          >
            PEOPLE • SYSTEMS • TECHNOLOGY
          </h6>

          <a
            href="#about"
            className="
        btn
        fw-bold
        d-inline-flex
        align-items-center
        py-2 px-4
        header-btn
      "
            role="button"
          >
            <div className="d-flex align-items-center fs-5 fs-md-4 fs-lg-3">
              <i className="fas fa-chevron-down me-2 chevron"></i>
              <span>More About Me</span>
            </div>
          </a>

        </div>
      </header>


      {/* ABOUT SECTION */}
      <section
        id="about"
        className="about section-spacing section-divider bg-white">

        <div className="container">

          <div className="text-center mb-4">
            <h4 className="section-title">About Me</h4>
            <hr className="w-25 mx-auto" />
            <h5 className="section-subtitle">Let me introduce myself.</h5>
          </div>

          <div
            className="
                about-content
                d-flex
                gap-4 gap-md-5
                align-items-top
                justify-content-center
                flex-column flex-md-row">

            <img
              src="./images/profile-photo.jpg"
              className="
                  about-img

                  rounded-circle
                  order-1 order-md-0
        "

              alt="Zuzana Kecskes"
            />
            <div className="
          text-center text-md-start
          px-2 px-sm-3 px-md-4 px-lg-5 px-xl-6
          order-2 order-md-1
          flex-grow-1
        ">
              <p className="lead">
                Hello! I’m interested in how technology and digital systems can make things work better for the people who use them. Over the past year, I’ve been building small web projects to explore modern web development and understand how digital tools are designed and built.
              </p>

              <p className="lead">
                During development I also explored AI-assisted development, learning how thoughtful prompting can help with debugging, exploring different implementation approaches, and understanding new concepts. Using AI as a learning and problem-solving tool has helped me experiment with ideas and deepen my understanding of development workflows.
              </p>
              <p className="lead">
                Before moving into technology, I worked in customer - facing and leadership roles, managing teams and helping people solve problems in fast - paced environments. That experience still shapes how I approach technology today - with a strong focus on usability, communication, and supporting the people behind the systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects SECTION */}
      <section
        id="projects"
        className="portfolio section-spacing section-divider bg-sand">
        <div className="container">
          <div className="text-center">
            <h4 className="section-title">Portfolio</h4>
            <hr className="w-25 mx-auto" />
            <h5 className="section-subtitle">Some Of My Recent Work.</h5>
            <p className="lead">Here is a small sample of my projects.</p>
          </div>

          <Projects />

        </div>
      </section>

      {/* Contact Section */}

      <section
        id="contact"
        className="contact pt-5 pt-md-6 section-divider bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="section-title">Contact</h4>
            <hr className="w-25 mx-auto" />
            <h5 className="section-subtitle">I'd love to hear from you.</h5>
            <p>If you have any questions or would like to work together, please don't hesitate to reach out.</p>
          </div>
          <div className="social-icons d-flex justify-content-center align-items-center gap-4 fs-2 ">
            <a
              href="https://github.com/suz91ka"
              target="_blank"
              rel="noreferrer"
              className="social-icons"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/zuzanakecskes/"
              target="_blank"
              rel="noreferrer"
              className="social-icons"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="mailto:zbojova@gmail.com"
              className="social-icons"
              aria-label="Email"
            >
              <i className="fa fa-envelope"></i>
            </a>

          </div>
        </div>

      </section>
      {/* Footer */}
      <footer className="text-center section-divider text-muted small py-3">
        © 2025 Zuzana Kecskes
      </footer>
    </div>

  );
};

export default App;
