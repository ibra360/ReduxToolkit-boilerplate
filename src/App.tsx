import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import ToDo from "./Components/ToDo";

function App() {
  return (
    <div>
      <Header headerText="React-Ts App" color="dark" />
      <ToDo cardTitle="Dynamic Card Rendering" />
    </div>
  );
}

export default App;
