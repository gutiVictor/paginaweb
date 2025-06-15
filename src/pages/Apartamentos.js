import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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

const ApartmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ApartmentCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ApartmentInfo = styled.div`
  padding: 1.5rem;
`;

const ApartmentTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ApartmentDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ApartmentFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const Feature = styled.li`
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "✓";
    color: #f1c40f;
  }
`;

const images = [
  {
    original: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    original: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    original: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

const apartments = [
  {
    id: 1,
    title: "Apartamento Salento - Vista Montaña",
    description: "Hermoso apartamento con vista panorámica a las montañas de Salento. Ideal para familias o grupos pequeños.",
    features: [
      "2 Habitaciones",
      "1 Baño",
      "Cocina completa",
      "WiFi gratuito",
      "TV Smart",
      "Estacionamiento",
    ],
  },
  {
    id: 2,
    title: "Apartamento Armenia - Centro",
    description: "Moderno apartamento en el centro de Armenia, cerca de todos los servicios y atracciones principales.",
    features: [
      "1 Habitación",
      "1 Baño",
      "Cocina equipada",
      "WiFi gratuito",
      "TV Smart",
      "Seguridad 24/7",
    ],
  },
  {
    id: 3,
    title: "Apartamento Salento - Valle del Cocora",
    description: "Acogedor apartamento con vista al Valle del Cocora, perfecto para una escapada romántica.",
    features: [
      "1 Habitación",
      "1 Baño",
      "Cocina completa",
      "WiFi gratuito",
      "Terraza privada",
      "Estacionamiento",
    ],
  },
];

function Apartamentos() {
  return (
    <PageContainer>
      <Section>
        <Title>Nuestros Apartamentos</Title>
        <ApartmentGrid>
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id}>
              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                showThumbnails={false}
                autoPlay={true}
                slideInterval={3000}
              />
              <ApartmentInfo>
                <ApartmentTitle>{apartment.title}</ApartmentTitle>
                <ApartmentDescription>
                  {apartment.description}
                </ApartmentDescription>
                <ApartmentFeatures>
                  {apartment.features.map((feature, index) => (
                    <Feature key={index}>{feature}</Feature>
                  ))}
                </ApartmentFeatures>
              </ApartmentInfo>
            </ApartmentCard>
          ))}
        </ApartmentGrid>
      </Section>
    </PageContainer>
  );
}

export default Apartamentos; 