import React, { useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { FaWhatsapp } from 'react-icons/fa'; // Icono de WhatsApp

// === CONTENEDOR PRINCIPAL ===
const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: #f8f9fa;
  position: relative;
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

// === BOTÓN DE WHATSAPP FLOTANTE ===
const WhatsAppWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1000;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    bottom: 15px;
    right: 15px;
  }
`;

const WhatsAppLabel = styled.span`
  background: #25D366;
  color: white;
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    display: none;
  }
`;

const WhatsAppButton = styled.a`
  background-color: #25D366;
  color: white;
  padding: 15px;
  border-radius: 50%;
  font-size: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);

    ${WhatsAppLabel} {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  animation: pulse 2s infinite;

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 1.8rem;
  }
`;

// === IMÁGENES CORREGIDAS (sin espacios iniciales en URLs) ===
const images = [
  {
    original: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
  },
  {
    original: "https://plus.unsplash.com/premium_photo-1674676471417-07f613528a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    thumbnail: "https://plus.unsplash.com/premium_photo-1674676471417-07f613528a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    original: "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    thumbnail: "https://images.unsplash.com/photo-1666282167632-c613fbeb163c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwYXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
];

// === LISTA DE ARRIENDOS ===
const rentalsList = [
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

function Arriendos() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rentalsList.length / PROPERTIES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const currentRentals = rentalsList.slice(startIndex, startIndex + PROPERTIES_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // === CONFIGURACIÓN DE WHATSAPP ===
  const mensajeWhatsApp = encodeURIComponent(
    "Hola, vi su sección de arriendos y me gustaría más información sobre una propiedad. ¿Tienen disponibilidad?"
  );
  const numeroWhatsApp = "573218907254"; // ← CAMBIA POR TU NÚMERO REAL (ej: 573101234567)

  return (
    <PageContainer>
      <Section>
        <Title>Arriendos</Title>
        <PropertyGrid>
          {currentRentals.map((rental) => (
            <PropertyCard key={rental.id}>
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
                <PropertyTitle>{rental.title}</PropertyTitle>
                <PropertyDescription>{rental.description}</PropertyDescription>
                <PropertyFeatures>
                  {rental.features.map((feature, index) => (
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

      {/* === BOTÓN DE WHATSAPP === */}
      <WhatsAppWrapper>
        <WhatsAppLabel>Escríbenos</WhatsAppLabel>
        <WhatsAppButton
          href={`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatea con nosotros por WhatsApp"
        >
          <FaWhatsapp />
        </WhatsAppButton>
      </WhatsAppWrapper>
    </PageContainer>
  );
}

export default Arriendos;