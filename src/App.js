import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maintenance from './components/Maintenance';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route 
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Contact />
                <Footer />
              </>
            } 
          />
          <Route path="/613613" element={<Maintenance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
