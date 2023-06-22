import "./Footer.scss";
import GithubLogo from "../../assets/icons/github.svg";
import LinkedInLogo from "../../assets/icons/linkedin.svg";
import MailIcon from "../../assets/icons/gmail.svg"

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__wrapper">
            <p className="footer__title">Contact Me</p>
            <img src={MailIcon} alt="mail icon" />
            <img src={GithubLogo} alt="github logo" />
            <img src={LinkedInLogo} alt="linkedin logo" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
