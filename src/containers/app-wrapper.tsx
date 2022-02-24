import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import { Header } from "../components/header/Header";
import { AppContext } from "../context/app-context";
type AppWrapperTypes = { children: React.ReactNode };
const AppWrapper = (props: AppWrapperTypes) => {
  const { theme } = useContext(AppContext);
  //TODO THIS IS NOT WORKING. Bit setting context right? Move to Appwrapper?
  const themeMui = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === "dark" ? "dark" : "light",
        },
      }),
    [theme]
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
