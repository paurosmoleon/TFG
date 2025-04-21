import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import AboutUs from './components/aboutus';
import Dashboard from './components/dashbboard';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
