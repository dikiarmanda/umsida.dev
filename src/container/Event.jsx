import Navbar from "../components/Navbar"
import Events from "../components/Events"
import Footer from "../components/Footer"

const Event = () => {
  return (
    <div className="container lg:max-w-7xl mx-auto">
      <Navbar />
      <main>
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default Event