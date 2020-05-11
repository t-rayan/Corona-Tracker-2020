import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  // return <Spinner animation="border" variant="warning" className="my-5" />;

  const style = {
    textAlign: "center",
    width: "50%",
    margin: "20% auto",
    color: "#aeb3b1",
    fontWeight: "100",
  };

  return (
    <div className="loader" style={style}>
      <p>Loading...</p>
    </div>
  );
}
