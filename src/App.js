import React from "react";
import "./styles.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "./ThemeProvider";
import { UserIDProvider } from "./UserIDProvider";

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
