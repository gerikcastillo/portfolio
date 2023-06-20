import "./HeroBanner.scss";
import GithubLogo from "../../assets/images/githublogo.png";
import LinkedInLogo from "../../assets/images/linkedinlogo.png";
import GerikImage from "../../assets/images/gerikimage.png";

function HeroBanner() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
        <div className="hero__text-container">
          <div className="hero__title-wrapper">
            <p className="hero__title-1">HI THERE 👋</p>
            <p className="hero__title-2">I'M GERIK</p>
            <p className="hero__title-3">DEVELOPER + DESIGNER</p>
            <p className="hero__subtitle">
              with a keen eye for design and bringing products to life.
            </p>
          </div>
          <div className="hero__links-wrapper">
            <a href="#" target="_blank">
              <img
                className="hero__logo"
                src={LinkedInLogo}
                alt="linkedin"
              ></img>
            </a>
            <a href="#" target="_blank">
              <img
                className="hero__logo"
                src={GithubLogo}
                alt="github"
              ></img>
            </a>
          </div>
        </div>
        <div className="hero__image-container">
            <img className="hero__image" src={GerikImage}alt="gerik"></img>
        </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
