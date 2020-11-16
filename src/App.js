import React, { useEffect } from "react";
import Home from "./pages/Home";

// Global Styles
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;
