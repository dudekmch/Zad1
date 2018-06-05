import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientApp from "./ClientApp";
import FormContextProvider from "./FormContextProvider";

const App = () => (
  <BrowserRouter>
    <FormContextProvider>
      <div className="app">
        <Switch>
          <Route exact path="/" component={ClientApp} />
        </Switch>
      </div>
    </FormContextProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
