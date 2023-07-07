import "./HeroBanner.scss";
import GerikImage from "../../assets/images/gerikimage2.png";

function HeroBanner() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__text-container">
            <p className="hero__title">Hey, I'm Gerik</p>
            <p className="hero__subtitle">full-stack web developer & designer</p>
          </div>
          {/* <div className="hero__image-container"> */}
            <img className="hero__image" src={GerikImage} alt="gerik"></img>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
