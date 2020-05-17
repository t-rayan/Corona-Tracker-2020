import React from "react";

export default function Details({ data }) {
  console.log(data);

  return <div className="details">Total Cases: {data.confirmed}</div>;
}
