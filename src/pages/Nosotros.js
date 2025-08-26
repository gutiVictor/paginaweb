import React from 'react';
import styled from 'styled-components';
import { FaCar, FaMapMarkedAlt, FaParking, FaSwimmingPool, FaWifi, FaUtensils } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: #f8f9fa;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ServiceTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Feature = styled.li`
  color: #666;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "✓";
    color: #f1c40f;
  }
`;

const services = [
  {
    id: 1,
    icon: <FaCar />,
    title: " Misión",
    description: "En Grano y Hogar nos dedicamos a transformar sueños en realidades, ofreciendo soluciones inmobiliarias de excelencia que combinan confianza, transparencia y calidez. Nuestro compromiso es brindar un servicio personalizado y profesional, sembrando bases sólidas para que cada familia y cada inversionista encuentre en nosotros el hogar o el proyecto ideal..",
    features: [
      
    ],
  },
  {
    id: 2,
    icon: <FaMapMarkedAlt />,
    title: "Visión",
    description: " El propósito es ser la inmobiliaria líder reconocida por su innovación, integridad y calidad en el servicio, destacándonos como la primera opción de quienes buscan seguridad y confianza para crecer. En Grano y Hogar aspiramos a construir no solo espacios, sino también relaciones duraderas que inspiren bienestar, prosperidad y arraigo.",
    features: [
      
    ],
  }
];

function Nosotros() {
  return (
    <PageContainer>
      <Section>
        <Title>Nosotros</Title>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <Feature key={index}>{feature}</Feature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>
    </PageContainer>
  );
}

export default Nosotros; 