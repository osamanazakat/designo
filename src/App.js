import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Locations from "./pages/locations";
import Web from "./pages/web-design";
import AppDesign from "./pages/app-design";
import Graphic from "./pages/graphic-design";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element = {<Home/>} />
        <Route path='/company' element={<Company/>} />
        <Route path='/locations' element={<Locations/>} />
      </Route>
      
    
    </Routes>
  );
}

export default App;
