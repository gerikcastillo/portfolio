import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="#about" className="navbar__button">ABOUT</a>
          <a href="#skills" className="navbar__button">SKILLS</a>
          <a href="#projects" className="navbar__button">PROJECTS</a>
          <a href="#contact" className="navbar__button navbar__button--border">CONTACT</a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
