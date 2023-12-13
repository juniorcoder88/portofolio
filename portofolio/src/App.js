import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./main.css";
import Foot from "./Foot";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Foot />
      <Footer />
    </>
  );
}

export default App;
