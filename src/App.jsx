import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <TimeLine />
    </>
  );
}

export default App;
