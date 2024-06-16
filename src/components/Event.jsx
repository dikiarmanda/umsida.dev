import { useRef } from "react"

const Event = ({ event }) => {
  const eventDetailRef = useRef(null)
  const openModal = () => {
    if (eventDetailRef.current) {
      eventDetailRef.current.showModal()
    }
  }

  return (
    <div className="card max-w-96 h-[540px] text-start shadow-xl my-10 mx-auto">
      <figure>
        <img src={event.poster} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.subTitle}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-secondary" onClick={openModal}>
            Detail
          </button>
        </div>
      </div>

      {/* Event Detail Modal */}
      <dialog id="eventDetail" className="modal" ref={eventDetailRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{event.title}</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Event