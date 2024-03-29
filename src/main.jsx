import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./Context/Usercontext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      {/* <RouterProvider router={router} /> */}
    </UserProvider>
  </React.StrictMode>
);
