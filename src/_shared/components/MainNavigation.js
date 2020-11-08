import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../store/context/AppContext";
import "./MainNavigation.css";

const mainNavigation = () => {
  const context = useContext(AppContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countNo = context.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0);

    setCount(countNo);
  }, [context.cart]);

  return (
    <header className="main-navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart ({count})</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default mainNavigation;
