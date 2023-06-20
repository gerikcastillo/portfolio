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
            <p className="hero__title-1">HELLO,</p>
            <p className="hero__title-2">I'M GERIK</p>
            <p className="hero__title-3">FULL-STACK DEVELOPER + DESIGNER</p>
          </div>
          <div className="hero__image-container">
            <img className="hero__image" src={GerikImage} alt="gerik"></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
