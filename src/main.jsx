import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import DataProvider from "./contexts/DataContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
