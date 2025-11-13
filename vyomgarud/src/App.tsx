import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen min-h-screen">
      <Header />
        <Hero />
        <About/>
        <Features/>

</div>
  );
}

export default App;
