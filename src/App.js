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
 {/*        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/" className="App-link">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos" className="App-link">À propos</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        <Header />
        <Footer />

        {/* Routes définies ici */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
