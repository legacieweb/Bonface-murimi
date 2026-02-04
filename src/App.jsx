import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPreview from './components/ProjectPreview';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const Home = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<ProjectPreview />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </div>
  )
}

export default App
