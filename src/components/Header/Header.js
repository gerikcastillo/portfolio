import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import Logo from "../../assets/images/geriklogo.png"

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
            <img className="header__logo"src={Logo} alt="gerik's logo"/>
          <div className="header__nav-wrapper">
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
