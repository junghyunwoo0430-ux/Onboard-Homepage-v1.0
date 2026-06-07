import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchoolLife from './pages/SchoolLife';
import Admission from './pages/Admission';
import Visa from './pages/Visa';
import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school-life" element={<SchoolLife />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/visa" element={<Visa />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
