import React from "react";
import Main from './components/Main'
import Commands from "./components/Commands";

const App = () => {
  return (
    <>
      <div className="h-full grid grid-cols-[1fr_2fr_1fr]">
        <div className="border"></div>
        <Main/>
        <Commands/>
      </div>
    </>
  );
};

export default App;
