import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Event";
import RoadmapSkripsi from "./pages/RoadmapSkripsi";

export default function App() {
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
