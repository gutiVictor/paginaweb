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

// Imágenes corregidas: todas de Unsplash, sin espacios, alta calidad
const images = [
  {
    original: "https://images.unsplash.com/photo-1662454419736-de132ff75638?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    thumbnail: "https://images.unsplash.com/photo-1662454419736-de132ff75638?w=300&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    original: "https://images.unsplash.com/photo-1603072388139-565853396b38?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    thumbnail: "https://images.unsplash.com/photo-1603072388139-565853396b38?w=300&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    original: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
    thumbnail: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=300&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
  },
];

// Lista ampliada de propiedades en venta (10 elementos)
const salesList = [
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
    title: "Casa Campestre - Aldea Quimbaya",
    description: "Hermosa casa campestre rodeada de naturaleza y cafetales. Ideal para vida tranquila o inversión.",
    features: ["3 Habitaciones", "2 Baños", "Jardín", "Parrilla", "Estacionamiento", "Agua propia"],
  },
  {
    id: 5,
    title: "Ático de Lujo - Mirador Armenia",
    description: "Ático premium con terraza privada, acabados de lujo y vista panorámica al valle del café.",
    features: ["3 Habitaciones", "3 Baños", "Cocina gourmet", "Terraza 50m²", "2 Parqueaderos", "Ascensor"],
  },
  {
    id: 6,
    title: "Departamento Ejecutivo - Torre del Café",
    description: "Modernidad y elegancia en el corazón financiero de Armenia. Ideal para ejecutivos o inversión.",
    features: ["2 Habitaciones", "2 Baños", "Home office", "Gimnasio", "Área social", "Parqueadero visitantes"],
  },
  {
    id: 7,
    title: "Finca Cafetera - Salento",
    description: "Finca productiva con 5 hectáreas, casa principal y potencial turístico. Oportunidad única.",
    features: ["Casa principal", "5 Ha", "Cafetales", "Agua", "Caminos", "Turismo rural"],
  },
  {
    id: 8,
    title: "Local Comercial - Centro Cultural",
    description: "Excelente ubicación para negocio. Alta afluencia peatonal y zonificación comercial.",
    features: ["80 m²", "Baño", "Escaparates", "Alto tráfico", "Fachada principal", "Contrato largo plazo"],
  },
  {
    id: 9,
    title: "Lote Urbano - Urbanización El Roble",
    description: "Lote plano listo para construir. Servicios públicos conectados y buena topografía.",
    features: ["300 m²", "Agua", "Luz", "Cloacas", "Zona residencial", "Urbanización cerrada"],
  },
  {
    id: 10,
    title: "Casa Colonial - Centro Histórico",
    description: "Casa restaurada con arquitectura tradicional del Eje Cafetero. Perfecta para hostel o vivienda.",
    features: ["4 Habitaciones", "3 Baños", "Patio interior", "Teja natural", "Madera maciza", "Historia"],
  },
];

const PROPERTIES_PER_PAGE = 6;

function Ventas() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(salesList.length / PROPERTIES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const currentProperties = salesList.slice(startIndex, startIndex + PROPERTIES_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <PageContainer>
      <Section>
        <Title>Ventas</Title>
        <PropertyGrid>
          {currentProperties.map((property) => (
            <PropertyCard key={property.id}>
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
                <PropertyTitle>{property.title}</PropertyTitle>
                <PropertyDescription>{property.description}</PropertyDescription>
                <PropertyFeatures>
                  {property.features.map((feature, index) => (
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

export default Ventas;