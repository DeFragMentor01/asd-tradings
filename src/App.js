import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maintenance from './components/Maintenance';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Maintenance />} />
          <Route 
            path="/613613" 
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
