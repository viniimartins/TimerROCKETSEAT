import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./Home";

export const CycleContext = createContext({} as CycleContextType);



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContext.Provider
          value={{
            activeCycle,
            activeCycleID,
            markCurentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
          }}
        >
          <Router />
        </CycleContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
