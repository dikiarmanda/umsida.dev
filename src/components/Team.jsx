export default function Team(props) {
  const member = props.member;
  return (
    <div className="card base-neutral shadow-xl my-10">
      <figure>
        <img src={"/src/assets/teams/" + member.foto} />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-2xl">{member.nama}</h2>
        <hr />
        <p className="text-secondary">{member.passion}</p>
        <p>{member.role}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><FontAwesomeIcon icon="fa-brands fa-instagram" /></button>
          <button className="btn btn-primary"><FontAwesomeIcon icon="fa-brands fa-github" /></button>
        </div>
      </div>
    </div>
  );
}
