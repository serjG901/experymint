import React from "react";
import "./styles.css";
import AppRouter from "./components/approuter/AppRouter";
import { ThemeProvider } from "./components/core/ThemeProvider";
import { UserIDProvider } from "./components/core/UserIDProvider";
import { UserProvider } from "./components/core/UserProvider";

function App() {
  return (
    <ThemeProvider>
      <UserIDProvider>
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </UserIDProvider>
    </ThemeProvider>
  );
}

export default App;
