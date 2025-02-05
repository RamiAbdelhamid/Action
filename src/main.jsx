import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // ✅ استيراد Provider
import store from "./store"; // ✅ استيراد Store
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* {" "} */}

    <App />
  </Provider>
);
