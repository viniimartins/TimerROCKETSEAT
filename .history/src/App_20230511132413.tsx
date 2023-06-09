import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={{}}> 
      <Button variant="primary" />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button />
    </ThemeProvider>
  ); 
}

export default App;
