import "./Projects.scss";
import EXPO from "../../assets/images/project-expo.png";
import AMEX from "../../assets/images/project-amex.png";
import DOC from "../../assets/images/project-doc2.png";

function Projects() {
  return (
    <>
      <section className="projects">
        <div className="projects__container">
          <h2 className="projects__title" id="projects">
            Most Recent Projects
          </h2>
          <div className="projects__wrapper">
            <article className="projects__block">
              <figure className="projects__figure">
                <img
                  className="projects__image"
                  src={EXPO}
                  alt="project screenshot"
                ></img>
              </figure>
              <div className="projects__details">
                <h3 className="projects__name">exposhare</h3>
                <p className="projects__subtitle">
                  Lead Developer, Capstone Project
                </p>
                <p className="projects__description">
                  {" "}
                  Exposhare is a full-stack CRUD web application C2C marketplace
                  for photography enthusiasts to buy/sell/trade in a
                  user-curated platform. It is a one-stop-shop where users can
                  shop while also joining a community through discussion forums.{" "}
                  Uses mock data to simulate live user listings.
                </p>
                <div className="projects__details-wrapper">
                <p className="projects__stack">
                  React · JavaScript · HTML/CSS · Node.js · Express.js · MySQL
                </p>
                <div className="projects__btn-wrapper">
                  <a href="" target="_blank" className="projects__link">
                    Live Site
                  </a>
                  <a href="" target="_blank" className="projects__link">
                    Github
                  </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="projects__block">
              <figure className="projects__figure">
                <img
                  className="projects__image"
                  src={AMEX}
                  alt="project screenshot"
                ></img>
              </figure>

              <div className="projects__details">
                <h3 className="projects__name">American Express Chat Window</h3>
                <p className="projects__subtitle">
                  Co-Developer, Industry Project
                </p>
                <p className="projects__description">
                  This project was conceived during a 24 hour Hackathon hosted
                  by Brainstation x American Express. Worked cross-functionally
                  with other cohorts such as data science and UX Design to come
                  up with our AI Chat Window solution to mimic an improved
                  customer experience.
                </p>
                <div className="projects__details-wrapper">
                <p className="projects__stack">
                  React · JavaScript · HTML/CSS · Figma
                </p>
                <div className="projects__btn-wrapper">
                  <a href="" target="_blank" className="projects__link">
                    Github
                  </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="projects__block">
              <figure className="projects__figure">
                <img
                  className="projects__image"
                  src={DOC}
                  alt="project screenshot"
                ></img>
              </figure>
              <div className="projects__details">
                <h3 className="projects__name">Doc Doc Goose</h3>
                <p className="projects__subtitle">
                  Co-Developer, Hackathon Project
                </p>
                <p className="projects__description">
                  Doc Doc Goose is a web application that serves as a search
                  engine to locate doctors within certain search parameters
                  (location, name, specialty).

                  The idea was conceived during a 12 hour hackathon hosted by BrainStation.
                </p>
                <div className="projects__details-wrapper">
                  <p className="projects__stack">
                    React · JavaScript · HTML/CSS · Node.js · Express.js
                  </p>
                  <div className="projects__btn-wrapper">
                    <a href="" target="_blank" className="projects__link">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
