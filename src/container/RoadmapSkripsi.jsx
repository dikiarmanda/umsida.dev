import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ROADMAP from "../assets/data/roadmap"

const RoadmapSkripsi = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="mt-20 mx-auto lg:max-w-7xl">
        <h1 className="text-center text-3xl font-bold">Roadmap Skripsi</h1>
        <p className="text-center text-secondary">update 17 Juni 2024</p>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-5">
          {ROADMAP.map((item, index) => (
            <li key={index}>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <div className={index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"}>
                <div>
                  <a href={"skripsi/" + item.slug} className="btn btn-secondary text-lg">{item.title}</a>
                </div>
                {item.description}
              </div>
              {index !== ROADMAP.length - 1 && <hr className="bg-primary"/>}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  )
}

export default RoadmapSkripsi
