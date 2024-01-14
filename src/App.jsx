import React from "react";
import Backgroud from "./components/Backgroud";
import Forground from "./components/Forground";

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <Backgroud />
        <Forground />
      </div>
    </>
  );
}

export default App;
