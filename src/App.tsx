import "./App.scss";
import AppWrapper from "./containers/app-wrapper";
import { AppProvider } from "./context/app-context";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/home";
import History from "./containers/history";
import Habits from "./containers/habits";

const App = () => {
  return (
    <AppProvider>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="my-habits" element={<Habits />} />
          <Route path="history" element={<History />} />
        </Routes>
      </AppWrapper>
    </AppProvider>
  );
};

export default App;
