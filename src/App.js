import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Locations from "./pages/locations";
import WebDesign from "./pages/web-design";
import AppDesign from "./pages/app-design";
import GraphicDesign from "./pages/graphic-design";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/appdesign" element={<AppDesign />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
