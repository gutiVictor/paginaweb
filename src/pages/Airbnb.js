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

const AirbnbGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const AirbnbCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Airbnbinfo = styled.div`
  padding: 1.5rem;
`;

const AirbnbTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const AirbnbDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const AirbnbFeatures = styled.ul`
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

// Misma galería de imágenes para todas las propiedades (puedes personalizar por propiedad si quieres)
const images = [
  {
    original: "https://images.unsplash.com/photo-1745429523635-ad375f836bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    thumbnail: "https://images.unsplash.com/photo-1745429523635-ad375f836bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    original: "https://images.unsplash.com/photo-1647292873299-0b868117be20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    thumbnail: "https://images.unsplash.com/photo-1647292873299-0b868117be20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    original: "https://images.unsplash.com/photo-1603072387986-d6136328c664?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    thumbnail: "https://images.unsplash.com/photo-1603072387986-d6136328c664?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
  },
];

// Datos extendidos: de 3 a 10 propiedades
const airbnbList = [
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
    title: "Casa de Campo - Alpes Quindianos",
    description: "Encantadora casa de campo rodeada de naturaleza y cafetales. Ideal para desconexión total.",
    features: ["3 Habitaciones", "2 Baños", "Jardín privado", "Parrilla", "Estacionamiento", "Ruta del café"],
  },
  {
    id: 5,
    title: "Loft Moderno - Centro Cultural Armenia",
    description: "Loft minimalista con techos altos y arte local. Perfecto para parejas jóvenes.",
    features: ["1 Habitación", "1 Baño", "Cocina abierta", "WiFi", "Estudio de trabajo", "Ascensor"],
  },
  {
    id: 6,
    title: "Suite Premium - Hotel Boutique Salento",
    description: "Suite de lujo en hotel boutique con spa, piscina y servicio de conserjería 24/7.",
    features: ["1 Habitación", "1 Baño", "Jacuzzi", "Desayuno incluido", "Vista al valle", "Spa"],
  },
  {
    id: 7,
    title: "Departamento Familiar - Parque del Café",
    description: "Amplio departamento a 5 minutos del Parque del Café. Ideal para familias grandes.",
    features: ["3 Habitaciones", "2 Baños", "Cocina completa", "Lavadora", "Estacionamiento", "Piscina común"],
  },
  {
    id: 8,
    title: "Cabaña Mágica - Bosque Nuboso",
    description: "Cabaña única con techo de paja y paredes de vidrio. Total inmersión en la naturaleza.",
    features: ["1 Habitación", "1 Baño", "Chimenea", "Baño al aire libre", "Senderismo", "Sin Wi-Fi (desconexión)"],
  },
  {
    id: 9,
    title: "Ático con Terraza - Mirador Armenia",
    description: "Ático elegante con terraza panorámica. Atardeceres inolvidables garantizados.",
    features: ["2 Habitaciones", "2 Baños", "Cocina gourmet", "Terraza 360°", "Estacionamiento", "Gimnasio"],
  },
  {
    id: 10,
    title: "Hostería Romántica - Aldea Quimbaya",
    description: "Pequeña hostería con solo 4 habitaciones. Diseño artesanal y atención personalizada.",
    features: ["1 Habitación", "1 Baño", "Desayuno gourmet", "Jardín zen", "Masajes", "Bicicletas"],
  },
];

const PROPERTIES_PER_PAGE = 6;

function Airbnb() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(airbnbList.length / PROPERTIES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const currentProperties = airbnbList.slice(startIndex, startIndex + PROPERTIES_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <PageButton
          key={i}
          active={i === currentPage}
          onClick={() => goToPage(i)}
        >
          {i}
        </PageButton>
      );
    }
    return buttons;
  };

  return (
    <PageContainer>
      <Section>
        <Title>Airbnb</Title>
        <AirbnbGrid>
          {currentProperties.map((property) => (
            <AirbnbCard key={property.id}>
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
              <Airbnbinfo>
                <AirbnbTitle>{property.title}</AirbnbTitle>
                <AirbnbDescription>{property.description}</AirbnbDescription>
                <AirbnbFeatures>
                  {property.features.map((feature, index) => (
                    <Feature key={index}>{feature}</Feature>
                  ))}
                </AirbnbFeatures>
              </Airbnbinfo>
            </AirbnbCard>
          ))}
        </AirbnbGrid>

        {/* Paginador */}
        <Pagination>
          <PageButton
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </PageButton>
          {renderPageButtons()}
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

export default Airbnb;