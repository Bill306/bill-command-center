import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Projects from "@/pages/Projects/Projects";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
