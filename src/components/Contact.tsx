import React from "react";

const Contact = () => {
  return (
    <section className="section-socials">
      <h1 className="heading-1">
        <span>Dont be a stranger!</span> <small>👋</small>
      </h1>
      <p className="paragraph">Connect with me online</p>
      <div className="section-socials--links">
        <a
          href="https://github.com/cahyawibawa"
          rel="noreferrer"
          target="_blank"
        >
          👾 GitHub
        </a>
        <a href="mailto:cahyawbwa@gmail.com" rel="noreferrer" target="_blank">
          ✉️ Mail
        </a>
        <a
          href="https://www.linkedin.com/in/cahya-wibawa"
          rel="noreferrer"
          target="_blank"
        >
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
