import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Page/About";
import Home from "./Components/Page/Home";
import Doctors from "./Components/Page/Doctors";
import ProjectDitail from "./Components/Page/ProjectDitail";
import Online from "./Components/Page/Online-Shop";
import Projects from "./Components/Page/Projects";
import NavVar from "./Components/Page/NavVar";
import Contact from "./Components/Page/Contrac";
import Footer from "./Components/Page/Footer";

function App() {
  return (
    <div className="bg-slate-900 ">
      <NavVar></NavVar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/doctor" element={<Doctors></Doctors>}></Route>
        <Route path="/online" element={<Online></Online>}></Route>
        <Route path="/ditals" element={<ProjectDitail></ProjectDitail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
