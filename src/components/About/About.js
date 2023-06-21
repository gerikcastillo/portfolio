import "./About.scss";

function About() {
  return (
    <>
      <header className="about">
        <div className="about__container">
          <div className="about__wrapper">
          <p className="about__title">About Me</p>
            <h2 className="about__bio">
              My name is <span>Gerik Castillo</span> /Geh-ruhk cAss-tea-yo/{" "}
            </h2>
            <p className="about__bio">
              I am a <span>Full-Stack Web Developer</span> based out of
              Brooklyn, NY. As a former Account Executive in the fintech
              industry and recent graduate of BrainStation's bootcamp, I am
              excited to leverage my extensive sales experience along with my
              newfound technical skills to create innovative solutions and make
              an impact in the tech industry.
            </p>
            <p className="about__bio">
              I love to combine logic and creative design to make
              visually-pleasing, and user-friendly web applications.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default About;
