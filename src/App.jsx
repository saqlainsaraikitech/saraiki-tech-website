import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer, WhatsFloat, ScrollToTop } from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Tools from './pages/Tools';
import ToolDetail from './pages/ToolDetail';
import Prompts from './pages/Prompts';
import PromptDetail from './pages/PromptDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tool/:slug" element={<ToolDetail />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/prompts/:slug" element={<PromptDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsFloat />
    </>
  );
}
