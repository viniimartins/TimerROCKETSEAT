import { ThemeProvider } from "styled-components";
import { BrowseRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowseRouter>
        <Router />
        <GlobalStyle />
      </BrowseRouter>
    </ThemeProvider>
  );
}

export default App;
