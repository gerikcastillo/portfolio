import "./HeroBanner.scss";

function HeroBanner() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__title-wrapper">
            <p className="hero__title">Hello!</p>
            <p className="hero__title">I'm Gerik,</p>
            <p className="hero__title">a full-stack web developer</p>
          </div>
          <div className="hero__subtitle-wrapper">
            <p className="hero__subtitle">with a keen eye for design and bringing products to life.</p>
          </div>
          <a href="#" target="_blank"><img src="" alt="linkedin"></img></a>
          <a href="#" target="_blank"><img src="" alt="github"></img></a>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
