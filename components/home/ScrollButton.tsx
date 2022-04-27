import React, { useCallback, useEffect, useState } from "react";
import styles from "@styles/Home.module.scss";
import { motion } from "framer-motion";

const downButtonSrc = "/down-button.svg";

const buttonVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "16px",
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};

const ScrollButton = () => {
  const [isScrollDisabled, setIsScrollDisabled] = useState<boolean>(false);

  const handleChangeLocation = (isDirectionTop: boolean): void => {
    setIsScrollDisabled(true);
    setTimeout(() => {
      setIsScrollDisabled(false);
    }, 400);
    if (isDirectionTop) {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ left: 0, top: window.innerHeight, behavior: "smooth" });
    }
  };

  const handleNavigation = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        if (!isScrollDisabled) handleChangeLocation(false);
      } else if (e.deltaY < 0) {
        if (!isScrollDisabled) handleChangeLocation(true);
      }
    },
    [isScrollDisabled]
  );

  // const prevent = (e: WheelEvent) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    window.addEventListener("wheel", handleNavigation, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <motion.div
      className={styles.scrollButton}
      onClick={() => handleChangeLocation(false)}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
    >
      <img src={downButtonSrc} alt="down" />
      <h1>see more</h1>
      <img src={downButtonSrc} alt="down" />
    </motion.div>
  );
};

export default ScrollButton;
