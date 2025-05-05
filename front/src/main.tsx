import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import App    from './App';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>
);
