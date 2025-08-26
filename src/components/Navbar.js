import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../imagenes/logo.png';

const Nav = styled.nav`
  background: linear-gradient(to right, #2c3e50, #3498db);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem; // Reducido de 1.5rem a 1.2rem
  font-weight: 200;
  display: flex;
  align-items: center;
  margin-right: auto; // Asegura que se quede a la izquierda
  
  img {
    height: 50px; // Reducido el tamaño de la imagen
    width: auto;
    margin-right: 2px; // Espacio entre la imagen y el texto
  }
  
  &:hover {
    color: #f1c40f;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #2c3e50;
    padding: 1rem;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #f1c40f;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
      <Logo to="/">
        <img src={logoImage} alt="Grano y Hogar" />
        Grano y Hogar
      </Logo>
        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Inicio</NavLink>
          <NavLink to="/apartamentos" onClick={() => setIsOpen(false)}>Apartamentos</NavLink>
          <NavLink to="/arriendos" onClick={() => setIsOpen(false)}>Arriendos</NavLink>
          <NavLink to="/ventas" onClick={() => setIsOpen(false)}>Ventas</NavLink>
          <NavLink to="/airbnb" onClick={() => setIsOpen(false)}>Airbnb</NavLink>
          <NavLink to="/servicios" onClick={() => setIsOpen(false)}>Servicios</NavLink>
          <NavLink to="/contacto" onClick={() => setIsOpen(false)}>Contacto</NavLink>
          
         
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 