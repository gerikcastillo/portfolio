import "./Header.scss";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__nav-wrapper">
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
