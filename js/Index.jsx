import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientApp from "./ClientApp";
import FormContext from "./FormContext"

const App = () => (
  <BrowserRouter>
  <FormContext>
    <div className="app">
      <Switch>
        <Route exact path="/" component={ClientApp} />
      </Switch>
    </div>
    </FormContext>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
