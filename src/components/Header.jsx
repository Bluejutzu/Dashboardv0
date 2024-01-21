/** @format */

// src/dashboard/components/Header.jsx
import React from "react";
import styles from "../styles/Header.module.css";
import user_icon from "../images/user-check-solid.svg";
import bell_icon from "../images/bell-solid.svg";
import diagram_icon from "../images/diagram-project-solid.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='.' className={styles.logo}>
        Maryland State Roleplay
      </a>
      <nav>
        <ul className={styles.nav__links}>
          <li>
            <a href='/projects'>
              <img className={styles.icon_diagram} src={diagram_icon} alt='' />
            </a>
          </li>
          <li>
            <a href='/news'>
              <img className={styles.icon_bell} src={bell_icon} alt='' />
            </a>
          </li>
          <li>
            <a href='./verification'>
              <img className={styles.icon_check} src={user_icon} alt='' />
            </a>
          </li>
        </ul>
      </nav>
      <a href='/contact' className={styles.cta}>
        Contact
      </a>
      <p className={`${styles.menu} ${styles.cta}`}>Menu</p>
    </header>
  );
};

export default Header;
