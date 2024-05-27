import { useRef } from "react";

export default function Event(props) {
  const workshop = props.workshop;

  const eventDetailRef = useRef(null);
  const openModal = () => {
    if (eventDetailRef.current) {
      eventDetailRef.current.showModal();
    }
  };

  return (
    <div className="card max-w-96 text-start shadow-xl my-10 mx-auto glass">
      <figure>
        <img src={"/img/events/" + workshop.poster} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{workshop.title}</h2>
        <p>{workshop.subTitle}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-secondary" onClick={openModal}>
            Detail
          </button>
        </div>
      </div>
      {/* Event Detail Modal */}
      <dialog id="eventDetail" className="modal" ref={eventDetailRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{workshop.title}</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
