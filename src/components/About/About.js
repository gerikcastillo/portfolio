import "./About.scss";
import React from "react";
import Resume from "../..//assets/downloads/Gerik_Castillo_Resume.pdf";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about__container">
          <div className="about__wrapper">
            <p className="about__title">About Me</p>
            <div className="about__block">
              <h2 className="about__bio">
                My name is <span>Gerik Castillo</span> /Geh-ruhk cAss-tea-yo/{" "}
              </h2>
              <p className="about__bio">
                I am a <span>Full-Stack Web Developer</span> based out of{" "}
                <span>Brooklyn, NY</span>. As a former Account Executive in the
                fintech industry and recent graduate of BrainStation's bootcamp,
                I am excited to leverage my extensive sales experience along
                with my newfound technical skills to create innovative solutions
                and make an impact in the tech industry.
              </p>
              <p className="about__bio">
                I love to combine logic and creative design to make
                visually-pleasing, and user-friendly web applications.
              </p>
              <p className="about__bio">
                For more details, please see my{" "}
                <a
                  className="about__links"
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>{" "}
                or find me on{" "}
                <a
                  className="about__links"
                  href="https://www.linkedin.com/in/gerikcastillo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
