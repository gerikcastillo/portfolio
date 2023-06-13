import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <button className="navbar__button">About</button>
          <button className="navbar__button">Experience</button>
          <button className="navbar__button">Projects</button>
          <button className="navbar__button">Contact</button>
          <button className="navbar__button navbar__button--border">Resume</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
