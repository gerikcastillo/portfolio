import "./Header.scss";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
        <h1 className="header__title">Gerik Castillo</h1>
        <div>
          <NavBar />
        </div>
        </div>
      </header>
    </>
  );
}

export default Header;
