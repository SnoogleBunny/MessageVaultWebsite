import React from "react";
import "./App.css";
import Questions from "./Screens/Faq/Questions";
import Navbar from "./Screens/shared-components/Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Screens/Index/Home";
import Services from "./Screens/Services/Services";
import Products from "./Screens/Products/Products";
import SignUp from "./Screens/SignUp/SignUp";
import Pricing from "./Screens/Pricing/Pricing";
import StoreProvider from "./Screens/store";

const App = () => {
  return (
    // wrapped react components inside StoreProvider so every component access store
    <StoreProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Questions} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/youtube" component={() => (window.location = "https://www.youtube.com/watch?v=-SL9KRvzVmo")} />
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
