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
                  Exposhare is a consumer-to-consumer marketplace designed for
                  photography enthusiasts, offering a platform for buying,
                  selling, and trading in a user-curated environment. This
                  all-in-one platform allows users not only to browse listings,
                  but also to become part of a community through engaging
                  discussion forums.
                </p>
                <div className="projects__details-wrapper">
                  <p className="projects__stack">
                    React · JavaScript · HTML/CSS · Node.js · Express.js · MySQL
                  </p>
                  <div className="projects__btn-wrapper">
                    <a
                      href="https://youtu.be/eCZ-s1Ex5fo"
                      target="_blank"
                      rel="noreferrer"
                      className="projects__link"
                    >
                      Demo
                    </a>
                    <a
                      href="https://github.com/gerikcastillo/exposhare-client"
                      target="_blank"
                      rel="noreferrer"
                      className="projects__link"
                    >
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
                <h3 className="projects__name">AMEX AI Chat Window</h3>
                <p className="projects__subtitle">
                  Co-Developer, Industry Project
                </p>
                <p className="projects__description">
                  This project was brought to life during a 24-hour Hackathon
                  hosted by Brainstation in collaboration with American Express.
                  We functioned as a cross-disciplinary team, working closely
                  with Data Science and UX Design colleagues to develop an AI
                  Chat Window solution aimed at enhancing customer experience.
                </p>

                <div className="projects__details-wrapper">
                  <p className="projects__stack">
                    React · JavaScript · HTML/CSS · Node.js · Express.js · Figma
                  </p>
                  <div className="projects__btn-wrapper">
                    <a
                      href="https://github.com/alexzaloga7/Industry-Project"
                      target="_blank"
                      rel="noreferrer"
                      className="projects__link"
                    >
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
                  Doc Doc Goose is a web application designed as a search engine
                  to locate doctors within specific search parameters such as
                  location, name, and specialty. This concept was developed
                  during an 8-hour hackathon hosted by BrainStation through
                  paired-programming teams.
                </p>

                <div className="projects__details-wrapper">
                  <p className="projects__stack">
                    React · JavaScript · HTML/CSS · Node.js · Express.js
                  </p>
                  <div className="projects__btn-wrapper">
                    <a
                      href="https://github.com/gerikcastillo/doctor-search"
                      target="_blank"
                      rel="noreferrer"
                      className="projects__link"
                    >
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
