import "./index.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="*" element={<Notfound />} />{" "}
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
