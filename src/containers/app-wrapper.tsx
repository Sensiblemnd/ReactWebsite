import React, { useContext } from "react";
import { AppContext } from "../context/app-context";
import { Header } from "../components/header/Header";
// TODO: Create Header to Have Network Icon and Theme button
const AppWrapper = (props: AppWrapperTypes) => {
  const { theme } = useContext(AppContext);

  return (
    <div className={`app-root ${theme}`}>
      <Header />
      {props.children}
    </div>
  );
};

type AppWrapperTypes = { children: React.ReactNode };

export default AppWrapper;
