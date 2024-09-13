import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home, Catalogue, Contact, Login, Footer, AboutUs, TailorDesign } from './pages';
import { useEffect } from 'react'; 
import Navbar from './pages/Navbar';
import Whatsapp from './component/Whatsapp';
import ScrollUp from './component/ScrollUp';

const AppContent = () => {
  const location = useLocation();  // Move useLocation here

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/tailor-design" element={<TailorDesign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Whatsapp />
      <Footer />
      <ScrollUp />
    </div>
  );
};

function App() {
  return (
    <main className="bg-gray-50">
      <Router> {/* Router now wraps AppContent */}
        <AppContent />
      </Router>
    </main>
  );
}

export default App;
