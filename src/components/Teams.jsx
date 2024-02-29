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
      ig: "satukode.id",
      github: "bagusdwik",
      perform: 1,
      foto: "bagus.jpg",
    },
    {
      id: 3,
      nama: "Firdausqi Salsabila",
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
      github: "dikiarmanda",
      perform: 2,
      foto: "arjuna.jpg",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="font-bold text-3xl block">Meet with Our Teams</h2>
      <div className="flex">
        <div className="lg:flex-initial lg:w-1/4 lg:mx-10">
          <Team member={ourTeams[0]} />
        </div>
        <div className="lg:flex-initial lg:w-1/4 lg:mx-10">
          <Team member={ourTeams[1]} />
        </div>
        <div className="lg:flex-initial lg:w-1/4 lg:mx-10">
          <Team member={ourTeams[2]} />
        </div>
        <div className="lg:flex-initial lg:w-1/4 lg:mx-10">
          <Team member={ourTeams[3]} />
        </div>
      </div>
    </div>
  );
}
