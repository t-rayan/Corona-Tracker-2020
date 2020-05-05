import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return <Spinner animation="border" variant="warning" className="my-5" />;
}
