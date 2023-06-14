import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import GerikLogo from "../../assets/images/geriklogo.png"

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <img className="header__logo" src={GerikLogo} alt="gerik logo"></img>
          <div className="header__nav-wrapper">
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
