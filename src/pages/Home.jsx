import { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="container lg:max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
