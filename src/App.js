import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Logement from './pages/Logement';
import APropos from './pages/APropos';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
