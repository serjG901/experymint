import React from "react";
import "./styles.css";
import AppRouter from "./components/approuter/AppRouter";
import { ThemeProvider } from "./components/core/ThemeProvider";
import { UserIDProvider } from "./components/core/UserIDProvider";

function App() {
  return (
    <ThemeProvider>
      <UserIDProvider>
        <AppRouter />
      </UserIDProvider>
    </ThemeProvider>
  );
}

export default App;
