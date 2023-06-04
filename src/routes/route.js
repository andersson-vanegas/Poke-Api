
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./Cards";
import { CardsDetails } from "../components/cards/CardsDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Cards} />
        <Route path="/pokemon/:name" component={<CardsDetails/>} />
      </Switch>
    </Router>
  );
};

export default App;
