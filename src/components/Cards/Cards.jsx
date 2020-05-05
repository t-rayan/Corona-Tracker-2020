import React from "react";
import Loader from "../Loader/Loader";
import styles from "../Cards/Cards.module.css";
import CountUp from "react-countup";
import numFormatter from "../../helpers/formatter";

import CaseIcon from "../../Icons/cases.svg";
import DeathIcon from "../../Icons/deaths.svg";
import NewCaseIcon from "../../Icons/newcases.svg";
import RecoveredIcon from "../../Icons/recovered.svg";

const Cards = ({
  data: {
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
  },
}) => {
  if (!NewConfirmed) {
    return <Loader />;
  }
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cards}>
        <img src={CaseIcon} className={styles.icon} />
        <h6 className={styles.cardTitle}>Total Cases</h6>
        <p className={styles.cardText}>{numFormatter(TotalConfirmed)}</p>
      </div>
      <div className={styles.cards}>
        <img src={DeathIcon} className={styles.icon} />
        <h6 className={styles.cardTitle}>Total Deaths</h6>

        <p className={styles.cardText}>{numFormatter(TotalDeaths)}</p>
      </div>
      <div className={styles.cards}>
        <img src={RecoveredIcon} className={styles.icon} />

        <h6 className={styles.cardTitle}>Total Recovered</h6>

        <p className={styles.cardText}>{numFormatter(TotalRecovered)}</p>
      </div>
      <div className={styles.cards}>
        <img src={NewCaseIcon} className={styles.icon} />

        <h6 className={styles.cardTitle}>New Confirmed</h6>

        <p className={styles.cardText}>{numFormatter(NewConfirmed)}</p>
      </div>
    </div>
  );
};
export default Cards;
