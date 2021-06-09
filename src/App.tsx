import React, { useContext } from "react";
import "./App.scss";
import AppWrapper from "./containers/app-wrapper";
import { AppProvider } from "./context/app-context";
function App() {
  return (
    <AppProvider>
      <AppWrapper>
        <div className="App">dfssdfgsdfg</div>
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
