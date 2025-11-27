import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white selection:bg-purple-500/30">
      {/* Image Carousel - Adapts to remaining space on right */}
      <ImageCarousel />

      {/* Main Content - Takes natural width up to max-w-6xl, carousel fills remaining space */}
      <main className="lg:max-w-6xl lg:pr-4">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
