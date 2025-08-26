import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apartamentos from './pages/Apartamentos';
import Arriendos from './pages/Arriendos';
import Ventas from './pages/Ventas';
import Airbnb from './pages/Airbnb';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apartamentos" element={<Apartamentos />} />
            <Route path="/arriendos" element={<Arriendos />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/airbnb" element={<Airbnb />} /> {/* O el componente que corresponda para Airbnb */}
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App; 