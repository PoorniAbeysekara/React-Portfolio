import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import CertificationsPage from "./pages/CertficationsPage";
import AboutMePage from "./pages/AboutMePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import FooterMain from "./components/footer/FooterMain";
import ContactMePage from "./pages/ContactMePage";

function App() {
  return (
    <main className="font-body">
      <Router>
        <NavbarMain />
        <Routes>
          {/* Separate Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactMePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
        <FooterMain />
      </Router>
    </main>
  );
}

export default App;
