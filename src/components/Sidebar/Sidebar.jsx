import React from "react";
import Notification from "../Notification/Notification";
import CountryPicker from "../CountryPicker/CountryPicker";
import TopCountries from "../TopCountries/TopCountries";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="d-flex justify-content-between align-items-baseline">
        {/* <Notification />
        <CountryPicker /> */}
      </div>
      <div className="d-flex flex-row">
        <TopCountries />
      </div>
    </div>
  );
}
