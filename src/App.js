import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./store/providers/AppProvider";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import MainNavigation from "./components/MainNavigation";
import "./App.css";

const App = (props) => {
  return (
    <AppProvider>
      <Router>
        <Fragment>
          <MainNavigation />
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </Fragment>
      </Router>
    </AppProvider>
  );
};

export default App;
