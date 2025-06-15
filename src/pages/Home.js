import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBed, FaCar, FaMapMarkedAlt } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #f1c40f;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 1rem;
  background: #f8f9fa;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Home() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <Title>Apartamentos Las Astromelias</Title>
          <Subtitle>
            Tu hogar lejos de casa en Salento y Armenia
          </Subtitle>
          <CTAButton to="/apartamentos">Ver Apartamentos</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesContainer>
          <FeatureCard>
            <FeatureIcon>
              <FaBed />
            </FeatureIcon>
            <FeatureTitle>Alojamiento de Lujo</FeatureTitle>
            <FeatureDescription>
              Apartamentos completamente equipados con todas las comodidades para una estancia perfecta.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <FaCar />
            </FeatureIcon>
            <FeatureTitle>Transporte Especial</FeatureTitle>
            <FeatureDescription>
              Servicio de transporte exclusivo para nuestros huéspedes a precios especiales.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <FaMapMarkedAlt />
            </FeatureIcon>
            <FeatureTitle>Tours y Actividades</FeatureTitle>
            <FeatureDescription>
              Descubre los mejores tours y actividades en la región con nuestros guías expertos.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesContainer>
      </FeaturesSection>
    </>
  );
}

export default Home; 