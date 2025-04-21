import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import AboutUs from './components/aboutus';
import Dashboard from './components/dashbboard';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
