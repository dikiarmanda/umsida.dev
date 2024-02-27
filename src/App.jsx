import { useEffect } from "react";
import "./App.css";
import { themeChange } from 'theme-change'
import Navbar from "./components/Navbar";

export default function App() {
  useEffect(() => {
    themeChange(false)
  }, [])
  
  return (
    <>
      <Navbar />
      Tes
    </>
  );
}
