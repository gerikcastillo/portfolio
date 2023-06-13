import "./NavBar.scss";


function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
            <button>Home</button>
            <button>About Me</button>
            <button>Skills</button>
            <button>Contact</button>
        </div>
       
      </nav>
    </>
  );
}

export default NavBar;
