import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "../src/component/Transport/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { storeIn, persistor } from "../src/inventry/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersistGate persistor={persistor}>
    <Provider store={(store, storeIn)}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </PersistGate>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
