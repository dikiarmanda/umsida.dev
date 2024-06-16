import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Event from "./container/Event";
import RoadmapSkripsi from "./container/RoadmapSkripsi";

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/roadmap-skripsi" element={<RoadmapSkripsi />} />
      </Routes>
    </Router>
  );
}
