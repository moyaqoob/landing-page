import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Highlights />
      <Footer/>
    </div>
  );
}

export default App;
