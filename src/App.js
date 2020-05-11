import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import { Header, Index } from "./components";
import styles from "./App.module.css";
import { fetchGlobalData } from "./api";
import { Provider } from "./Context";
import { Consumer } from "./Context";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <div className={styles.container}>
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}
