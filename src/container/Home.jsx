import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import Teams from "../components/Teams"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="md:max-w-7xl lg:max-w-screen-2xl mx-auto">
        <Hero />
        <About />
        <Events compact={true} />
        <Teams />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home