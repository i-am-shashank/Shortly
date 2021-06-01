import React from "react";
import GlobalStyle from "./theme/globalStyles";
import Nav from "./styled/Nav";
import Home from "./Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
    </>
  );
}

export default App;
