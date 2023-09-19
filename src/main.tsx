import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import {Provider} from "react-redux";

import {store} from "./stores/store.ts"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "@/features/auth/pages/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="system">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
