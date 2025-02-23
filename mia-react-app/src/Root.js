import React from "react";
import App from "./App";

// redux test
import { Provider } from "react-redux";
import store from "./store/configure";
import { BrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
