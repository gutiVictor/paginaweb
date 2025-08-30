import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaRocket } from 'react-icons/fa'; // 👈 Nuevos iconos

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

const NosotrosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const NosotrosCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NosotrosIcon = styled.div`
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const NosotrosTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
`;

const NosotrosDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const NosotrosFeatures = styled.ul`
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

const nosotros = [
  {
    id: 1,
    icon: <FaHeart />, // ❤️ Misión: Calidez, confianza, servicio personalizado
    title: "Misión",
    description: "En Grano y Hogar nos dedicamos a transformar sueños en realidades, ofreciendo soluciones inmobiliarias de excelencia que combinan confianza, transparencia y calidez. Nuestro compromiso es brindar un servicio personalizado y profesional, sembrando bases sólidas para que cada familia y cada inversionista encuentre en nosotros el hogar o el proyecto ideal.",
    features: [],
  },
  {
    id: 2,
    icon: <FaRocket />, // 🚀 Visión: Crecimiento, liderazgo, futuro
    title: "Visión",
    description: "El propósito es ser la inmobiliaria líder reconocida por su innovación, integridad y calidad en el servicio, destacándonos como la primera opción de quienes buscan seguridad y confianza para crecer. En Grano y Hogar aspiramos a construir no solo espacios, sino también relaciones duraderas que inspiren bienestar, prosperidad y arraigo.",
    features: [],
  },
];

function Nosotros() {
  return (
    <PageContainer>
      <Section>
        <Title>Nosotros</Title>
        <NosotrosGrid>
          {nosotros.map((item) => (
            <NosotrosCard key={item.id}>
              <NosotrosIcon>{item.icon}</NosotrosIcon>
              <NosotrosTitle>{item.title}</NosotrosTitle>
              <NosotrosDescription>{item.description}</NosotrosDescription>
              <NosotrosFeatures>
                {item.features.map((feature, index) => (
                  <Feature key={index}>{feature}</Feature>
                ))}
              </NosotrosFeatures>
            </NosotrosCard>
          ))}
        </NosotrosGrid>
      </Section>
    </PageContainer>
  );
}

export default Nosotros;