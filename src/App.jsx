import { useEffect } from "react";
import "./App.css";
import { themeChange } from "theme-change";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
