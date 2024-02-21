import './App.css';
import Navbar from './Navbar';
import Footer from './footer';
import Faq from './Faq';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
