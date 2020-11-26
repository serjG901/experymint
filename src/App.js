import React from "react";
import "./styles.css";
import AppRouter from "./components/approuter/AppRouter";
import { ThemeProvider } from "./components/core/ThemeProvider";
import { UserIDProvider } from "./components/core/UserIDProvider";
import { UserProvider } from "./components/core/UserProvider";
import { PushUpErrorProvider } from "./components/core/PushUpErrorProvider";

function App() {
  return (
    <PushUpErrorProvider>
      <ThemeProvider>
        <UserIDProvider>
          <UserProvider>
            <AppRouter />
          </UserProvider>
        </UserIDProvider>
      </ThemeProvider>
    </PushUpErrorProvider>
  );
}

export default App;
