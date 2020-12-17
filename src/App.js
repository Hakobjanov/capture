import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
