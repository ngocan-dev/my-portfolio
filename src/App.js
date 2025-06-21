import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
        {/* Add any additional components here */}
      </main>
    </>
  )
}

export default App
