import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #f1c40f;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;

  svg {
    color: #f1c40f;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f1c40f;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Contacto</h3>
          <ContactInfo>
            <FaPhone />
            <span>+57 XXX XXX XXXX</span>
          </ContactInfo>
          <ContactInfo>
            <FaWhatsapp />
            <span>+57 XXX XXX XXXX</span>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <span>info@astromelias.com</span>
          </ContactInfo>
          <ContactInfo>
            <FaMapMarkerAlt />
            <span>Salento y Armenia, Colombia</span>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <h3>Enlaces Rápidos</h3>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/apartamentos">Apartamentos</FooterLink>
          <FooterLink to="/servicios">Servicios</FooterLink>
          <FooterLink to="/contacto">Contacto</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Servicios</h3>
          <FooterLink to="/servicios#transporte">Transporte</FooterLink>
          <FooterLink to="/servicios#tours">Tours</FooterLink>
          <FooterLink to="/servicios#parking">Estacionamiento</FooterLink>
          <FooterLink to="/servicios#amenities">Amenidades</FooterLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Apartamentos Las Astromelias. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer; 