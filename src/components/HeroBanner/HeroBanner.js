import "./HeroBanner.scss";
import GerikImage from "../../assets/images/gerikimage2.png";

function HeroBanner() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__text-container">
            <p className="hero__title-1">Hey there,</p>
            <p className="hero__title-2">I'm Gerik</p>
            <p className="hero__title-3">Full-Stack Web Developer & Designer</p>
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
