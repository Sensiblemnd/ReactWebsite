import React, { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Header } from "../components/header/Header";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
type AppWrapperTypes = { children: React.ReactNode };
const AppWrapper = (props: AppWrapperTypes) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { theme } = useContext(AppContext);
  //TODO THIS IS NOT WORKING. Bit setting context right? Move to Appwrapper?
  const themeMui = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === "dark" ? "dark" : "light",
        },
      }),
    [prefersDarkMode, theme]
  );
  return (
    <ThemeProvider theme={themeMui}>
      <CssBaseline />
      <div className={`app-root ${theme}`}>
        <Header />
        {props.children}
      </div>{" "}
    </ThemeProvider>
  );
};

export default AppWrapper;
