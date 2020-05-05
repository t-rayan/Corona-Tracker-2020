import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { fetchCountryData } from "../../api";
import styles from "./DoughnutChart.module.css";

export default function DoughnutChart() {
  const [cData, setcData] = useState([]);

  useEffect(() => {
    const fetchcData = async () => {
      setcData(await fetchCountryData());
    };
    fetchcData();
  }, []);
  console.log(cData);

  //doughnut chart data
  const doughnutData = {
    labels: cData.map(({ CountryCode }) => CountryCode),

    datasets: [
      {
        data: cData.map(({ TotalConfirmed }) => TotalConfirmed),
        backgroundColor: [
          "#4BBD90",
          "rgba(37, 150, 172, 0.5)",
          "rgba(49, 60, 254, 0.5)",
          "rgba(241, 167, 17, 0.5)",
          "rgba(249, 79, 75, 0.5)",
        ],
        borderWidth: 5,
        hoverBorderColor: [
          "#4BBD90",
          "rgba(37, 150, 172, 0.1)",
          "rgba(49, 60, 254, 0.1)",
          "rgba(241, 167, 17, 0.1)",
          "rgba(249, 79, 75, 0.1)",
        ],
      },
    ],
  };

  const doughnutChart = cData.length ? (
    <Doughnut
      data={doughnutData}
      height={245}
      width={10}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "left",
          align: "center",
          labels: {
            fontSize: 10,
            padding: 10,
            boxWidth: 20,
          },
        },
        layout: {
          padding: {
            top: 20,
            bottom: 20,
          },
        },
      }}
    />
  ) : null;

  return <div className={styles.doughnutContainer}>{doughnutChart}</div>;
}
