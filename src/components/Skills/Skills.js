import "./Skills.scss";
import JavaScript from "../../assets/icons/javascript.svg";
import HTML5 from "../../assets/icons/html.svg";
import CSS3 from "../../assets/icons/css3.svg";
import SASS from "../../assets/icons/sass.svg";
import React from "../../assets/icons/react.svg";
import Node from "../../assets/icons/nodejs.svg";
import MySQL from "../../assets/icons/mysql2.svg";
import Bash from "../../assets/icons/bash.svg";
import Figma from "../../assets/icons/figma.svg";
import Heroku from "../../assets/icons/heroku.svg";
import Jira from "../../assets/icons/jira.svg";
import Python from "../../assets/icons/python.svg";
import Salesforce from "../../assets/icons/salesforce.svg";
import Typescript from "../../assets/icons/typescript.svg";
import VSCode from "../../assets/icons/vscode.svg";
import Express from "../../assets/icons/express.svg";
import Jest from "../../assets/icons/jest.svg";

function Skills() {
  return (
    <>
      <section className="skills">
        <div className="skills__container">
          <p className="skills__title">Skills</p>
          <div className="skills__wrapper">
            <div className="skills__block">
              <img
                className="skills__icon"
                src={JavaScript}
                alt="javascript icon"
              />{" "}
              <p className="skills__label">JavaScript</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={HTML5} alt="html5 icon" />{" "}
              <p className="skills__label">HTML5</p>
            </div>
            <div className="skills__block">
              <img className="skills__icon" src={CSS3} alt="css3 icon" />{" "}
              <p className="skills__label">CSS3</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={SASS} alt="sass icon" />{" "}
              <p className="skills__label">SASS</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={React} alt="react icon" />{" "}
              <p className="skills__label">React Native</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={Node} alt="node icon" />{" "}
              <p className="skills__label">Node.js</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={MySQL} alt="mysql icon" />{" "}
              <p className="skills__label">MySQL</p>
            </div>
            <div className="skills__block">
              {" "}
              <img
                className="skills__icon"
                src={Python}
                alt="python icon"
              />{" "}
              <p className="skills__label">Python</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={Bash} alt="bash icon" />{" "}
              <p className="skills__label">Bash</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={Figma} alt="figma icon" />{" "}
              <p className="skills__label">Figma</p>
            </div>
            <div className="skills__block">
              {" "}
              <img
                className="skills__icon"
                src={Heroku}
                alt="heroku icon"
              />{" "}
              <p className="skills__label">Heroku</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={Jira} alt="Jira icon" />{" "}
              <p className="skills__label">Jira</p>
            </div>
            <div className="skills__block">
              {" "}
              <img
                className="skills__icon"
                src={Salesforce}
                alt="salesforce icon"
              />{" "}
              <p className="skills__label">Salesforce</p>
            </div>
            <div className="skills__block">
              {" "}
              <img
                className="skills__icon"
                src={Typescript}
                alt="typescript icon"
              />{" "}
              <p className="skills__label">TypeScript</p>
            </div>
            <div className="skills__block">
              {" "}
              <img
                className="skills__icon"
                src={VSCode}
                alt="vscode icon"
              />{" "}
              <p className="skills__label">VSCode</p>
            </div>
            <div className="skills__block">
              {" "}
              <img
                className="skills__icon"
                src={Express}
                alt="express icon"
              />{" "}
              <p className="skills__label">Express.js</p>
            </div>
            <div className="skills__block">
              {" "}
              <img className="skills__icon" src={Jest} alt="jest icon" />{" "}
              <p className="skills__label">Jest</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
