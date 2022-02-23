import "./App.scss";
import AppWrapper from "./containers/app-wrapper";
import { AppContext, AppProvider } from "./context/app-context";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import Home from "./pages/home";
import History from "./pages/history";
import Habits from "./pages/habits";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
const queryClient = new QueryClient();

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="habits" element={<Habits />} />
            <Route path="settings" element={<Settings />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="history" element={<History />} />
          </Routes>
        </AppWrapper>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </AppProvider>
  );
};

export default App;
