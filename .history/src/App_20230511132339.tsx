import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button variant="primary" />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button />
    </>
  );
}

export default App;
