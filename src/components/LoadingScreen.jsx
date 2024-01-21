/** @format */

// LoadingScreen.js
import React from "react";
import styles from "../styles/LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loading_screen}>
      <div className={styles.loading_spinner}></div>
    </div>
  );
};

export default LoadingScreen;
