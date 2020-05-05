import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import styles from "../Notification/Notification.module.css";

export default function Notification() {
  return (
    <div className="notification">
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faBell} className={styles.bellIcon} />
      </div>
    </div>
  );
}
