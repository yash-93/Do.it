import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home/home";
import Dashboard from "./pages/dashboard/dashboard";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Router path="/dashboard" exact>
            <Dashboard />
          </Router>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
