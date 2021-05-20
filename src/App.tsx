import React from "react";
import "./App.scss";
import AppWrapper from "./containers/app-wrapper";
function App() {
  return (
    <AppWrapper>
      <div className="App">
        <div className="side-menu">Side Menu</div>
        <div className="main-resizable">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
          accusantium dicta vitae illum rerum, repellendus veritatis quisquam
          dolorum quod! Tempore molestias asperiores totam quibusdam beatae
          minima aperiam a, reprehenderit culpa!
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
