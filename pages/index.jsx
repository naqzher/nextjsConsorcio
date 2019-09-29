import React, { Fragment } from "react";
// import Container from "@material-ui/core/Container";
import { PageLogin, CreateUsuario, Pepe } from "../containers";
import { Router } from "@reach/router";

// import Header from "../src/components/Header";

export default function Index() {
  return (
    <Fragment>
      <Router>
        <Pepe path="/pepe" />
        <PageLogin path="/login" />
      </Router>
    </Fragment>
  );
}
