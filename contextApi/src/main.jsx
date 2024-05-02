import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider} from './Context/AppContextProvider';
import { ThemeContextProvider } from './Context/ThemeContextProvider';



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ThemeContextProvider>
);
