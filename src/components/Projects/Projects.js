import "./Projects.scss";
import EXPO from "../../assets/images/project-expo.png"
import AMEX from "../../assets/images/project-amex.png";
import DOC from "../../assets/images/project-doc.png";
import DemoAMEX from "../../assets/videos/chatbot-demo.mp4";
import DemoEXPO from "../../assets/videos/exposhare-demo.mp4";

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
              {/* <div className="project__video-container">
                <p>DEMO:</p>
                <video className="projects__video" controls muted>
                  <source src={DemoEXPO} type="video/mp4"></source>
                </video>
              </div> */}
            </figure>
            <div className="projects__details">
              <h3 className="projects__name">exposhare</h3>
              <p className="projects__subtitle">
                Lead Developer, Capstone Project
              </p>
              <p className="projects__description"> description</p>
            </div>
            <div className="projects__btn-wrapper">
            <button className="projects__button">Live Site</button>
            <button className="projects__button">Github</button>
            </div>
            
          </article>
          <article className="projects__block">
            <figure className="projects__figure">
              <img
                className="projects__image"
                src={AMEX}
                alt="project screenshot"
              ></img>

         
              {/* <div className="project__video-container">
                <p>DEMO:</p>
                <video className="projects__video" controls muted>
                  <source src={DemoAMEX} type="video/mp4"></source>
                </video>
              </div> */}
   

            </figure>
            
            <div className="projects__details">
              <h3 className="projects__name">American Express Chat Window</h3>
              <p className="projects__subtitle">
                Co-Developer, Industry Project
              </p>
              <p className="projects__description"> description</p>
            </div>
            <div className="projects__btn-wrapper">
            <button className="projects__button">Github</button>
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
              <p className="projects__description"> description</p>
            </div>
            <div className="projects__btn-wrapper">
            <button className="projects__button">Github</button>
            </div>
          </article>
          {/* <article className="projects__block">
            <figure className="projects__figure">
              <img
                className="projects__image"
                src=""
                alt="project screenshot"
              ></img>
            </figure>
            <div className="projects__details">
              <h3 className="projects__name">Jeopardy Game</h3>
              <p className="projects__subtitle">
                Co-Developer, Hackathon Project
              </p>
              <p className="projects__description"> description</p>
            </div>
            <div className="projects__btn-wrapper">
            <button className="projects__button">Github</button>
            </div>
          </article> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
