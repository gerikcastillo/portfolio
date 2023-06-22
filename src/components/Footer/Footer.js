import "./Footer.scss";
import GithubLogo from "../../assets/icons/github2.svg";
import LinkedInLogo from "../../assets/icons/linkedin2.svg";
import MailIcon from "../../assets/icons/gmail2.svg";
import Logo from "../../assets/images/geriklogo.png";

function Footer() {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer__container">
          <a href="#top" className="footer__link">
            <img className="footer__logo" src={Logo} alt="my logo" />
          </a>
          <div className="footer__wrapper">
            <img className="footer__icon" src={MailIcon} alt="mail icon" />
            <img className="footer__icon" src={GithubLogo} alt="github logo" />
            <img
              className="footer__icon"
              src={LinkedInLogo}
              alt="linkedin logo"
            />
          </div>

          <p className="footer__copyright">© Gerik Castillo's Website 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
