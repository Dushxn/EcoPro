import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Header from './shared/Header.jsx';
import Footer from './shared/Footer.jsx';
import DiseaseResult from './Components/DiseaseResult.jsx';
import FileUpload from './Components/FileUpload.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/diseaseResult' element={<DiseaseResult />} />
            <Route path='/detectDisease' element={<FileUpload />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </StrictMode>
);
