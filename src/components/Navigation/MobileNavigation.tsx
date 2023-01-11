import * as React from "react";
import { motion } from "framer-motion";
const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.34, 1.56, 0.64, 1],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.34, 1.56, 0.64, 1],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.34, 1.56, 0.64, 1],
};

const closedTansition = {
  duration: 1,
  ease: [0.34, 1.56, 0.64, 1],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/cahyawibawa"
              rel="noreferrer"
              target="_blank"
            >
              👾 GH
            </a>

            <a
              href="https://www.linkedin.com/in/cahya-wibawa"
              rel="noreferrer"
              target="_blank"
            >
              💼 LD
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:cahyawbwa@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://cahyawibawa.github.io/nft-landing-page/"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/nft.jpg" alt="enefty" />
            <h2>ENEFTY</h2>
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/heatrow-2.webp" alt="heatrow" />
            <h2>Heatrow</h2>
          </a>
          <a
            href="https://my-portfolio-cahyawibawa.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/cahya-1.webp" alt="cahya" />
            <h2>
              CahyaWibawa
              <br />
              V2
            </h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
