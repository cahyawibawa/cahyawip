import React from "react";

const Project = () => {
  return (
    <section id="sectionProjects" className="section-projects">
      <h1 className="heading-1">
        <span>Some Things I&apos;ve Built</span> <small>💼</small>
      </h1>
      <p className="paragraph">
        Each project is unique. Here are some of my works.
      </p>

      {/* <div className="project-card">
        <div className="project-card__left">
          <h4 className="heading-4">REACT, STRAPI, STRIPE</h4>
        </div>
        <div
          className="project-card__middle"
          data-displacement="webp/myDistorsionImage.webp"
        >
          <img src="webp/weargoods.webp" alt="weargoods model" />
          <img src="webp/weargoods.png" alt="weargoods logo" />
        </div>
        <div className="project-card__right">
          <h2
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="alexxandria-anim"
            className="heading-2"
          >
            WEARGOODS
          </h2>
          <p className="paragraph">E-commerce web app</p>
          <a
            rel="noreferrer"
            target="_blank"
            href="#"
            className="project-card__link"
          >
            VISIT THE WEBSITE
          </a>
          <div className="project-card__socials">
            <a href="#">
              <img src="svg/dribble.svg" alt="dribble icon" />
            </a>
            <a rel="noreferrer" target="_blank" href="#">
              <img src="svg/github.svg" alt="github icon" />
            </a>
          </div>
        </div>
      </div> */}

      <div className="project-card">
        <div className="project-card__left">
          <h4 className="heading-4">HTML, CSS, GSAP</h4>
        </div>
        <div
          className="project-card__middle"
          data-displacement="webp/myDistorsionImage.webp"
        >
          <img src="webp/nft.jpg" alt="enefty" />
          <img src="webp/ENEFTY.png" alt="enefty logo" />
        </div>
        <div className="project-card__right">
          <h2
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="safarika-anim"
            className="heading-2"
          >
            ENEFTY
          </h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://cahyawibawa.github.io/nft-landing-page/"
            className="project-card__link"
          >
            VISIT THE WEBSITE
          </a>
          <div className="project-card__socials">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://dribbble.com/shots/12361426-Safarika-Adventure"
            >
              <img src="svg/dribble.svg" alt="dribble icon" />
            </a>
            <a rel="noreferrer" target="_blank" href="#">
              <img src="svg/github.svg" alt="github icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card__left">
          <h4 className="heading-4">
            NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION
          </h4>
        </div>
        <div
          className="project-card__middle"
          data-displacement="webp/myDistorsionImage.webp"
        >
          <img src="webp/heatrow-1.webp" alt="heatrow" />
          <img src="webp/heatrow-2.webp" alt="heatrow logo" />
        </div>
        <div className="project-card__right">
          <h2
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="heatrow-anim"
            className="heading-2"
          >
            Heatrow
            <br /> Estate
          </h2>
          <a
            href="https://heatrow.vercel.app/"
            rel="noreferrer"
            target="_blank"
            className="project-card__link"
          >
            VISIT THE WEBSITE
          </a>
          <div className="project-card__socials">
            <a href="#">
              <img src="svg/dribble.svg" alt="dribble icon" />
            </a>
            <a rel="noreferrer" target="_blank" href="#">
              <img src="svg/github.svg" alt="github icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card__left">
          <h4 className="heading-4">REACT, FRAMER MOTION</h4>
        </div>
        <div
          className="project-card__middle"
          data-displacement="webp/myDistorsionImage.webp"
        >
          <img src="webp/cahya-1.webp" alt="cahya model" />
          <img src="webp/cahya-2.png" alt="cahya logo" />
        </div>
        <div className="project-card__right">
          <h2
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="cahya-anim"
            className="heading-2"
          >
            Cahya Wibawa
            <br /> v2
          </h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://my-portfolio-cahyawibawa.vercel.app/"
            className="project-card__link"
          >
            VIEW SOURCE CODE
          </a>
          <div className="project-card__socials">
            <a rel="noreferrer" target="_blank" href="#">
              <img src="svg/dribble.svg" alt="dribble icon" />
            </a>
            <a rel="noreferrer" target="_blank" href="#">
              <img src="svg/github.svg" alt="github icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
