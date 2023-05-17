import React from "react";
import Header from "./components/global/Header"
import HeroSection from "./components/heroSection"
import BuildFuture from "./components/buildFuture";

function App() {

  return (
    <>
      <main className="hidden bg-[#fff] lg:block">
        <Header/>
        <HeroSection/>
        <BuildFuture/>
      </main>
    </>
  )
};

export default App
