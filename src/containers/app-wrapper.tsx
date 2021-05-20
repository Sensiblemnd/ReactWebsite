import React from "react";

const AppWrapper = (props: AppWrapperTypes) => {
  return <div className={"app-wrapper"}>{props.children}</div>;
};

type AppWrapperTypes = { children: React.ReactNode };

export default AppWrapper;
