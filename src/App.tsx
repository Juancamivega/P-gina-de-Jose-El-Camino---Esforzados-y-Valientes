import { Toaster } from '@/components/ui/sonner';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Teachings from './sections/Teachings';
import Resources from './sections/Resources';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Header />
      <main>
        <Hero />
        <About />
        <Teachings />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
