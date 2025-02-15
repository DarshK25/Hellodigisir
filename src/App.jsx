
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import AboutUs from "./components/About.jsx";
import FeaturesTable from "./components/FeaturesTable.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import FAQ from "./components/FAQ.jsx";
import Testimonials from "./components/Testimonials.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar is outside Routes so it appears on all pages */}
        <Routes>
          {/* Home Route (Group multiple sections under one route) */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <Features />
                <FeaturesTable />
                <Pricing />
                <Testimonials />
                <Contact />
                <FAQ />
              </>
            }
          />

          {/* Individual Routes (Optional) */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer /> {/* Footer is outside Routes so it appears on all pages */}
      </div>
    </Router>
  );
};

export default App;