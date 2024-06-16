import Team from "./Team"
import TEAMS from "../assets/data/teams"

const Teams = () => {
  return (
    <div className="text-center" id="teams">
      <h2 className="font-bold text-3xl">Meet with Our Teams</h2>
      <div className="flex flex-wrap justify-center">
        {TEAMS.map((member, index) => (
          <div key={index} className="mx-24 flex-1 lg:w-1/4 lg:mx-10">
            <Team member={member} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams