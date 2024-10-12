import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Customs from "./Components/Customs/Customs";
import Footer from "./Components/Footer/Footer";
import Hinges from "./Components/Hinges/Hinges";
import ContHinges from "./Components/ContHinges/ContHinges";
import GateHardware from "./Components/GateHardware/GateHardware";
import Industries from "./Components/Industries/Industries";
import Policies from "./Components/Policies/Policies";
import About from "./Components/About/About";
import ScrollToTop from "./Components/ScrollToTop";
import Employment from "./Components/Employment/Employment";
import { ScrollProvider } from "./utils/ScrollContext";
import PdfDownload from "./Components/PdfDownload/PdfDownload";

function App() {
  return (
    <>
      <ScrollProvider>
        <div>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Customs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/hinges"
              element={
                <>
                  <Header />
                  <Hinges />
                  <Footer />
                </>
              }
            />
            <Route
              path="/continous-hinges"
              element={
                <>
                  <Header />
                  <ContHinges />
                  <Footer />
                </>
              }
            />
            <Route
              path="/gate-hardware"
              element={
                <>
                  <Header />
                  <GateHardware />
                  <Footer />
                </>
              }
            />
            <Route
              path="/industries-served"
              element={
                <>
                  <Header />
                  <Industries />
                  <Footer />
                </>
              }
            />
            <Route
              path="/policies"
              element={
                <>
                  <Header />
                  <Policies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/employment"
              element={
                <>
                  <Header />
                  <Employment />
                  <PdfDownload />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </ScrollProvider>
    </>
  );
}

export default App;
