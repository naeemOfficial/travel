import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Details from "./Pages/Details/Details/Details";
import About from "./Pages/About/About/About";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";


function App() {
  return (
    <div>
      <Router>
        <Info/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
