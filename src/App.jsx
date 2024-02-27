import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Home from "./pages/Home";
import Event from "./pages/Event";

export default function App() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}
