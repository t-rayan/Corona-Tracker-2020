import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart({
  data: { confirmed, recovered, deaths, country },
}) {
  const barChart = confirmed ? (
    <Bar
      height={300}
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [confirmed, recovered, deaths],
            backgroundColor: [
              "rgba(49, 60, 254, 0.6)",
              "rgba(37, 150, 172, 0.6)",
              "rgba(249, 79, 75, 0.6)",
            ],
            barThickness: 30,
            minBarLength: [10, 10, 15],
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        title: { display: true, text: "Current status in" + " " + country },
        layout: {
          padding: 30,
        },
        scales: {
          xAxes: [
            {
              ticks: { display: true },
              gridLines: {
                display: false,
                drawBorder: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: true,
              },
              gridLines: {
                display: true,
                drawBorder: false,
              },
            },
          ],
        },
      }}
    />
  ) : null;

  const styles = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    marginTop: "1rem",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  };

  return <div style={styles}>{barChart}</div>;
}
