import React from "react";
import "./App.scss";
import AddPlayerButton from "./components/buttons/add-player-button";
import AppWrapper from "./containers/app-wrapper";
import { AppProvider } from "./context/app-context";
const App = () => {
  return (
    <AppProvider>
      <AppWrapper>
        <div className="App">dfssdfgsdfg</div>
        <AddPlayerButton />
      </AppWrapper>
    </AppProvider>
  );
};

export default App;
