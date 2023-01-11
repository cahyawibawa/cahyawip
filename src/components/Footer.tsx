import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <img src="svg/cahya-logo-footer.svg" alt="design and devloped by cahya" />
      <div className="footer__socials">
        <a href="https://dribbble.com/weblyze" target="_blank" rel="noreferrer">
          <img src="svg/dribble.svg" alt="dribble logo" />
        </a>
        <a
          href="https://github.com/cahyawibawa"
          target="_blank"
          rel="noreferrer"
        >
          <img src="svg/github.svg" alt="github logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
