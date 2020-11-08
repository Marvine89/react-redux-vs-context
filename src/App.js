import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./_shared/store/providers/AppProvider";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import MainNavigation from "./_shared/components/MainNavigation";
import "./App.css";

const App = (props) => {
  return (
    <AppProvider>
      <Router>
        <Fragment>
          <MainNavigation />
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </Fragment>
      </Router>
    </AppProvider>
  );
};

export default App;
