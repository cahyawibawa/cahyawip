import * as React from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";

const variants = {
  open: {
    left: 0,
    pointerEvent: "none",
    transition: {
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  closed: {
    left: "-100vw",
    pointerEvent: "none",
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export const Navigation = ({ isOpen, toggleOpen }: any) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >
      <MobileNavigation variants={variants} isOpen={isOpen} />
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        className="menu-top"
      >
        <Link href="/">
          <a className="brand-logo">
            <img
              className="brand-logo__icon"
              src="svg/cahya-logo-left.svg"
              alt="cahya logo icon"
            />
            <span className="brand-logo__text-wrapper">
              <img
                className="brand-logo__text"
                src="svg/cahya-logo-rightt.svg"
                alt="cahya logo text"
              />
            </span>
          </a>
        </Link>
        <MenuToggle toggle={toggleOpen} toggleState={isOpen} />
      </div>
    </motion.div>
  );
};
