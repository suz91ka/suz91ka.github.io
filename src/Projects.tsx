import React from "react";
import './Projects.css';


type Project = {
  title: string;
  image: string;
  link: string;
  alt: string;
  live: string;
  repo: string;
};

const projects: Project[] = [
  {
    title: "Random Quote",
    image: "./images/quote.png",
    link: "./images/quote.png",
    alt: "Random Quote Machine",
    live: "https://suz91ka.github.io/random-quote-machine/",
    repo: "https://github.com/suz91ka/random-quote-machine"

  },
  {
    title: "Calculator",
    image: "./images/calculator.png",
    link: "./images/calculator.png",
    alt: "Calculator",
    live: "https://suz91ka.github.io/calculator/",
    repo: "https://github.com/suz91ka/calculator"
  },
  {
    title: "Jokes Website",
    image: "./images/vtipy.png",
    link: "./images/vtipy.png",
    alt: "Jokes Website",
    live: "https://suz91ka.github.io/vtipy/",
    repo: "https://github.com/suz91ka/jokes-website"
  },
];

const Projects: React.FC = () => {
  return (
    <div className="row g-4 justify-content-center">
      {projects.map((project, index) => (
        <div key={index}
          className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">



          <div
            className="text-decoration-none d-block w-100">
            <div
              className="project-card card shadow-sm rounded-4 h-100 mx-auto">

              {/* IMAGE → LIVE DEMO */}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="d-block ratio ratio-16x9 rounded-top-4 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectPosition: "center" }}
                />


              </a>

              {/* TITLE → CODE */}
              <div className="card-body text-center">


                <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">



                  {/* VIEW CODE */}
                  <a
                    className="view-code-link d-flex align-items-center justify-content-center gap-1"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View source code on GitHub"
                  >
                    <span>View Code
                      </span>
                    <i className="bi bi-braces"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

      ))
      }
    </div >
  );
};

export default Projects;
