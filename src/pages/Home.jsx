import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Teams from "../components/Teams";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container lg:max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Teams />
      <Footer />
    </div>
  );
}
