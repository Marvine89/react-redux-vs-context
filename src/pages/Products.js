import React, { useContext } from "react";
import { AppContext } from "../store/context/AppContext";
import "./Products.css";

export default () => {
  const context = useContext(AppContext);

  return (
    <React.Fragment>
      <main className="products">
        <ul>
          {context.products.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={context.addProductToCart.bind(this, product)}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};
