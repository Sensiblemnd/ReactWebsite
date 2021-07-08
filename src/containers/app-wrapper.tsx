import React, { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Header } from "../components/header/Header";
// TODO: Create Header to Have Network Icon and Theme button
type AppWrapperTypes = { children: React.ReactNode };
const AppWrapper = (props: AppWrapperTypes) => {
  const { theme } = useContext(AppContext);

  return (
    <div className={`app-root ${theme}`}>
      <Header />
      {props.children}
    </div>
  );
};

export default AppWrapper;
