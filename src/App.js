import React from "react";
import "./styles.css";
import AppRouter from "./components/approuter/AppRouter";
import { ThemeProvider } from "./components/core/ThemeProvider";
import { LoginProvider } from "./components/core/LoginProvider";
import { UserProvider } from "./components/core/UserProvider";
import { PushUpErrorProvider } from "./components/core/PushUpErrorProvider";

function App() {
  return (
    <PushUpErrorProvider>
      <ThemeProvider>
        <LoginProvider>
          <UserProvider>
            <AppRouter />
          </UserProvider>
        </LoginProvider>
      </ThemeProvider>
    </PushUpErrorProvider>
  );
}

export default App;
