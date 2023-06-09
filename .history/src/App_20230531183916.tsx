import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./Home";
import { createContext } from "react";
import { CycleContextProvider } from "./contexts/CycleContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
