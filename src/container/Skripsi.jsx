import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ROADMAP from "../assets/data/roadmap"
import { useParams } from 'react-router-dom'

const Skripsi = () => {
  const { slug } = useParams()
  const data = ROADMAP.find((item) => item.slug === slug)
  return (
    <div className="container">
      <Navbar />
      <main className="mt-20 my-10 mx-auto lg:max-w-7xl">
        <div className="breadcrumbs text-sm font-semibold">
          <ul>
            <li className="hover:underline"><a href="/roadmap-skripsi">Roadmap</a></li>
            <li>{data.title}</li>
          </ul>
        </div>
        <h1 className="text-center text-3xl font-bold mb-5">{data.title}</h1>
        {data.body.map((item, index) => (
          <div key={index} className="form-control flex-row mt-3">
            <input type="checkbox" className="checkbox checkbox-secondary border-2" />
            <label className="ms-3 text-lg">{item}</label>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default Skripsi