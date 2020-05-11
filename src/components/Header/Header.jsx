import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.mainTitle}>Covid-19 Tracker</p>
    </div>
  );
}
