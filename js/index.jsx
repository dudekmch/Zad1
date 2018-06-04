import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClientApp from './ClientApp'
import store from "./store";

const fourOhfour = () => <h1>404</h1>;

const App = () => 
   (
     <BrowserRouter>
    <div className="app" >
    <Provider store={store}>
      <Switch>
      <Route exact path='/' component={ClientApp} />
      <Route component={fourOhfour} />
      </Switch>
      </Provider>
      </div>
      </BrowserRouter>
  );

render(<App />, document.getElementById('app'));