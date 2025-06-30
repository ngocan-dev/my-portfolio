import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load components
const Navbar = lazy(() => import('./components/shared/Navbar'));
const Hero = lazy(() => import('./components/Home/Hero'));
const About = lazy(() => import('./components/About/About'));
const Experience = lazy(() => import('./components/Resume/Experience'));
const Projects = lazy(() => import('./components/Portfolio/Projects'));
const Contact = lazy(() => import('./components/Contact/Contact'));

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Suspense fallback={<div className="canvas-loader">Loading...</div>}>
            <Navbar />
            <Hero />
          </Suspense>
        </div>

        <Suspense fallback={<div className="canvas-loader">Loading...</div>}>
          <About />
          <Experience />
          <Projects />
          <div className="relative z-0">
            <Contact />
          </div>
        </Suspense>
      </div>
    </Router>
  );
};

export default App; 