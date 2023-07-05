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
          <div className="footer__wrapper">
          <a href="#top" className="footer__link">
            <img className="footer__logo" src={Logo} alt="my logo" />
          </a>
          </div>
          
          <div className="footer__wrapper">
            <a href="mailto:geriklc@gmail.com">
              <img className="footer__icon" src={MailIcon} alt="mail icon" />
            </a>
            <a
              href="https://github.com/gerikcastillo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon"
                src={GithubLogo}
                alt="github logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gerikcastillo/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon"
                src={LinkedInLogo}
                alt="linkedin logo"
              />
            </a>
          </div>

          <p className="footer__copyright">© Gerik Castillo's Website 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
