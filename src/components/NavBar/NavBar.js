import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <button className="navbar__button">ABOUT</button>
          <button className="navbar__button">EXPERIENCE</button>
          <button className="navbar__button">PROJECTS</button>
          <button className="navbar__button">CONTACT</button>
          {/* <button className="navbar__button navbar__button--border">RESUME</button> */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
