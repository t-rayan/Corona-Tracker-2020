import React, { useState, useEffect } from "react";
import { fetchWeeklyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";
import numFormatter from "../../helpers/formatter";

const LineChart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchWeeklyData());
    };
    fetchAPI();
  }, []);

  const lineChartData = {
    labels: dailyData?.map(({ date }) => date),
    datasets: [
      {
        data: dailyData?.map(({ confirmed }) => confirmed),
        label: "Infected",
        borderWidth: 3,
        borderCapStyle: "rounded",
        borderColor: "rgba(71, 52, 219, 0.5)",
        fill: false,
        spanGaps: false,
        pointStyle: "rectRounded",
        pointRadius: 2.5,
      },
    ],
  };

  const lineChart = dailyData.length ? (
    <Line
      data={lineChartData}
      height={248}
      options={{
        responsive: true,
        maintainAspectRatio: false,

        tooltips: {
          backgroundColor: "rgba(49, 60, 254, 0.7)",
        },
        title: {
          display: false,
          text: "Confirmed cases around world",
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#ccc",
            fontSize: 12,
            padding: 30,
            boxWidth: 20,
          },
        },
        layout: {
          padding: {
            top: 50,
            left: 50,
            right: 50,
            bottom: 0,
          },
        },

        scales: {
          xAxes: [
            {
              ticks: { display: true },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
                drawBorder: true,
              },
            },
          ],
        },
      }}
    />
  ) : null;

  return <div className={styles.chartContainer}>{lineChart}</div>;
};
export default LineChart;
