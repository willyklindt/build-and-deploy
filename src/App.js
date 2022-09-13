import React from "react";

import "./index.css";
import "./App.css";

import { Footer, Blog, Possibility, WhatGPT3, Header } from "./containers";
import { CTA, Brand, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
