import Team from "./Team";

export default function Teams() {
  const ourTeams = [
    {
      id: 1,
      nama: "Diki Armanda",
      passion: "Fullstack Developer",
      role: "Founder | Lecturer",
      ig: "diki_armandav",
      github: "dikiarmanda",
      perform: 6,
      foto: "diki.jpg",
    },
    {
      id: 2,
      nama: "Bagus Dwi Kurniawan",
      passion: "Cyber Security",
      role: "Lecturer",
      ig: "bagusdkrn",
      github: "bagusdwik",
      perform: 1,
      foto: "bagus.jpg",
    },
    {
      id: 3,
      nama: "Firdausi Usqi Salsabila",
      passion: "UI/UX Designer",
      role: "Lecturer",
      ig: "usqiiii",
      github: "suqiiichan",
      perform: 1,
      foto: "usqi.jpg",
    },
    {
      id: 4,
      nama: "Arjuna Adlina Martha",
      passion: "Mobile Developer",
      role: "Lecturer",
      ig: "arjunaadlina",
      github: "",
      perform: 2,
      foto: "arjuna.jpg",
    },
  ];

  return (
    <div className="text-center" id="teams">
      <h2 className="font-bold text-3xl">Meet with Our Teams</h2>
      <div className="flex flex-wrap justify-center">
        {ourTeams.map((teamMember, index) => (
          <div key={index} className="mx-24 flex-1 lg:w-1/4 lg:mx-10">
            <Team member={teamMember} />
          </div>
        ))}
      </div>
    </div>
  );
}
