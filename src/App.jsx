import { useState } from "react";
import "./App.css";
import One from "./Assignment/One";
import Two from "./Assignment/Two";
import Header from "./Assignment/Three";
import Four from "./Assignment/Four";

function App() {
  return (
    <>
      <One name="Rajnish Kumar" age={20} />
      <Two text={"Hi Rajnish"} />
      <Header title={"PW Skills"} />
      <Four list="Apple" />
      <Four list="cat" />
      <Four list="boys" />
      <Four list="Dogs" />
    </>
  );
}

export default App;
