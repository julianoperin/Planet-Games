import React, { useEffect } from "react";
import Home from "./pages/Home";

// Global Styles
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
