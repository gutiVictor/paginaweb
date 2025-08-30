import React, { useState } from 'react';
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

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PropertyCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PropertyInfo = styled.div`
  padding: 1.5rem;
`;

const PropertyTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const PropertyDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const PropertyFeatures = styled.ul`
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: 1px solid #3498db;
  background: ${props => props.active ? '#3498db' : 'white'};
  color: ${props => props.active ? 'white' : '#3498db'};
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.3s ease;

  &:hover:not([disabled]) {
    background: #2980b9;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Imágenes comunes para todas las propiedades (puedes personalizar por apartamento si lo deseas)
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

// Lista ampliada de apartamentos (ahora 10)
const apartmentsList = [
  {
    id: 1,
    title: "Apartamento Salento - Vista Montaña",
    description: "Hermoso apartamento con vista panorámica a las montañas de Salento. Ideal para familias o grupos pequeños.",
    features: ["2 Habitaciones", "1 Baño", "Cocina completa", "WiFi gratuito", "TV Smart", "Estacionamiento"],
  },
  {
    id: 2,
    title: "Apartamento Armenia - Centro",
    description: "Moderno apartamento en el centro de Armenia, cerca de todos los servicios y atracciones principales.",
    features: ["1 Habitación", "1 Baño", "Cocina equipada", "WiFi gratuito", "TV Smart", "Seguridad 24/7"],
  },
  {
    id: 3,
    title: "Apartamento Salento - Valle del Cocora",
    description: "Acogedor apartamento con vista al Valle del Cocora, perfecto para una escapada romántica.",
    features: ["1 Habitación", "1 Baño", "Cocina completa", "WiFi gratuito", "Terraza privada", "Estacionamiento"],
  },
  {
    id: 4,
    title: "Loft Moderno - Zona Cultural",
    description: "Diseño minimalista con grandes ventanales y acabados en madera. Perfecto para parejas jóvenes.",
    features: ["1 Habitación", "1 Baño", "Cocina integrada", "Área de trabajo", "Ascensor", "WiFi"],
  },
  {
    id: 5,
    title: "Ático con Terraza - Mirador del Café",
    description: "Ático elegante con terraza privada y vista 360° al valle. Ideal para disfrutar atardeceres.",
    features: ["2 Habitaciones", "2 Baños", "Cocina gourmet", "Terraza amplia", "Estacionamiento", "Gimnasio"],
  },
  {
    id: 6,
    title: "Departamento Familiar - Parque del Café",
    description: "Amplio departamento a solo 5 minutos del Parque del Café. Perfecto para familias grandes.",
    features: ["3 Habitaciones", "2 Baños", "Cocina completa", "Lavadora", "Piscina común", "Zona de juegos"],
  },
  {
    id: 7,
    title: "Casa Campestre - Aldea Quimbaya",
    description: "Encantadora casa campestre rodeada de cafetales y naturaleza. Total tranquilidad asegurada.",
    features: ["3 Habitaciones", "2 Baños", "Jardín privado", "Parrilla", "Estacionamiento", "Senderos"],
  },
  {
    id: 8,
    title: "Suite Boutique - Hotel Salento",
    description: "Suite de lujo en hotel boutique con spa, desayuno incluido y servicio premium 24/7.",
    features: ["1 Habitación", "1 Baño", "Jacuzzi", "Desayuno", "Vista al valle", "Spa"],
  },
  {
    id: 9,
    title: "Departamento Ejecutivo - Centro Armenia",
    description: "Ideal para estancias largas. Totalmente equipado con zona de trabajo y gimnasio en edificio.",
    features: ["1 Habitación", "1 Baño", "Home office", "Gimnasio", "WiFi", "Seguridad"],
  },
  {
    id: 10,
    title: "Cabaña Romántica - Bosque Nuboso",
    description: "Cabaña íntima con chimenea y baño al aire libre. Experiencia única en medio de la naturaleza.",
    features: ["1 Habitación", "1 Baño", "Chimenea", "Baño exterior", "Sin Wi-Fi", "Senderismo"],
  },
];

const PROPERTIES_PER_PAGE = 6;

function Apartamentos() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(apartmentsList.length / PROPERTIES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const currentApartments = apartmentsList.slice(startIndex, startIndex + PROPERTIES_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <PageContainer>
      <Section>
        <Title>Nuestros Apartamentos</Title>
        <PropertyGrid>
          {currentApartments.map((apartment) => (
            <PropertyCard key={apartment.id}>
              <ImageGallery
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                showThumbnails={false}
                autoPlay={true}
                slideInterval={3000}
                lazyLoad={true}
              />
              <PropertyInfo>
                <PropertyTitle>{apartment.title}</PropertyTitle>
                <PropertyDescription>{apartment.description}</PropertyDescription>
                <PropertyFeatures>
                  {apartment.features.map((feature, index) => (
                    <Feature key={index}>{feature}</Feature>
                  ))}
                </PropertyFeatures>
              </PropertyInfo>
            </PropertyCard>
          ))}
        </PropertyGrid>

        {/* Paginador */}
        <Pagination>
          <PageButton
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </PageButton>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </PageButton>
          ))}
          <PageButton
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </PageButton>
        </Pagination>
      </Section>
    </PageContainer>
  );
}

export default Apartamentos;