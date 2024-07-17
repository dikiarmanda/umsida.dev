import Event from "./Event"
import EVENTS from "../assets/data/events"

const Events = ({ compact = false }) => {
  let newEvents = EVENTS
    .sort((a, b) => new Date(b.tgl) - new Date(a.tgl))
    .slice(0, 3)

  newEvents = compact ? newEvents : EVENTS

  return (
    <div className="bg-base-100 text-center px-10 py-20 md:max-w-7xl mx-auto" id="events">
      <h2 className="font-bold text-3xl">Our Events</h2>
      <a href="/events" className="text-secondary ease-in-out duration-300 hover:text-primary hover:underline">
        view all events
      </a>
      <div className="flex flex-wrap justify-center">
        {newEvents.map((event, index) => (
          <div key={ index } className="mx-24 flex-1 lg:w-1/4 lg:mx-10">
            <Event event={ event } />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events