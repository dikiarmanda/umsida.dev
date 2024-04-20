import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Team(props) {
  const member = props.member;

  const statModalRef = useRef(null);
  const openModal = () => {
    if (statModalRef.current) {
      statModalRef.current.showModal();
    }
  };

  return (
    <div className="card max-w-96 min-h-96 base-neutral shadow-xl my-10 mx-auto">
      <figure>
        <img src={"/img/teams/" + member.foto} />
      </figure>
      <div className="card-body gap-0">
        <h2 className="font-semibold text-2xl">{member.nama}</h2>
        <hr />
        <p className="text-secondary">{member.passion}</p>
        <p>{member.role}</p>
        <div className="card-actions justify-center mt-5">
          <button className="btn btn-secondary text-lg" onClick={openModal}>
            <FontAwesomeIcon icon={faChartSimple} />
          </button>
          <a
            href={"https://www.instagram.com/" + member.ig}
            className="btn btn-secondary text-lg"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href={"https://github.com/" + member.github}
            className="btn btn-secondary text-lg"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      {/* stat modal */}
      <dialog id="statModal" className="modal" ref={statModalRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{member.nama}</h3>
          <div className="stats shadow">
            <div className="stat px-3 md:px-10">
              <div className="stat-figure text-primary">
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  className="text-3xl inline-block"
                />
              </div>
              <div className="stat-title">Total Workshop</div>
              <div className="stat-value text-primary">{member.perform}</div>
              <div className="stat-desc"></div>
            </div>

            <div className="stat px-3 md:px-10">
              <div className="stat-figure text-secondary">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-3xl inline-block"
                />
              </div>
              <div className="stat-title">Sharing Time</div>
              <div className="stat-value text-secondary">
                {member.perform * 3} h
              </div>
              <div className="stat-desc"></div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
