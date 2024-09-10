import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store";

/*store.dispatch({ type: "account/deposit", payload: 1000 });
console.log(store.getState()); //{account: {balance: 1000, loan: 0, loanPurpose: ""}, customer: {name: "John Doe", email: "
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
//Provider is a React component that provides the
// Redux store to your React application.

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
