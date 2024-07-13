import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: sans-serif; // Use a fonte que preferir
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
