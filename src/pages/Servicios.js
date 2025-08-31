import React from 'react';
import styled from 'styled-components';
import { FaCar, FaMapMarkedAlt, FaParking, FaSwimmingPool, FaWifi, FaUtensils, FaWhatsapp } from 'react-icons/fa';

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

// === SERVICIOS ===
const services = [
  {
    id: 1,
    icon: <FaCar />,
    title: "Transporte Especial",
    description: "Servicio de transporte exclusivo para nuestros huéspedes a precios especiales.",
    features: [
      "Traslado desde/hacia el aeropuerto",
      "Servicio de taxi privado",
      "Tarifas especiales para huéspedes",
      "Conductores profesionales",
    ],
  },
  {
    id: 2,
    icon: <FaMapMarkedAlt />,
    title: "Tours y Excursiones",
    description: "Descubre los mejores lugares de Salento y Armenia con nuestros tours guiados.",
    features: [
      "Tour al Valle del Cocora",
      "Visita a fincas cafeteras",
      "Recorridos por el centro histórico",
      "Guías expertos locales",
    ],
  },
  {
    id: 3,
    icon: <FaParking />,
    title: "Estacionamiento",
    description: "Estacionamiento seguro y gratuito para todos nuestros huéspedes.",
    features: [
      "Estacionamiento privado",
      "Vigilancia 24/7",
      "Espacio para vehículos grandes",
      "Acceso directo al condominio",
    ],
  },
  {
    id: 4,
    icon: <FaSwimmingPool />,
    title: "Amenidades",
    description: "Disfruta de nuestras instalaciones y servicios adicionales.",
    features: [
      "Piscina comunal",
      "Zona de BBQ",
      "Área de juegos",
      "Gimnasio",
    ],
  },
  {
    id: 5,
    icon: <FaWifi />,
    title: "Servicios Básicos",
    description: "Todos los servicios esenciales incluidos en tu estadía.",
    features: [
      "WiFi de alta velocidad",
      "Limpieza diaria",
      "Servicio de lavandería",
      "Asistencia 24/7",
    ],
  },
  {
    id: 6,
    icon: <FaUtensils />,
    title: "Servicios Adicionales",
    description: "Servicios extra para hacer tu estadía más cómoda.",
    features: [
      "Servicio de alimentos",
      "Masajes y spa",
      "Servicio de niñera",
      "Alquiler de equipos",
    ],
  },
];

function Servicios() {
  // === CONFIGURACIÓN DE WHATSAPP ===
  const mensajeWhatsApp = encodeURIComponent(
    "Hola, vi su sección de servicios y me gustaría más información. ¿Ofrecen paquetes especiales?"
  );
  const numeroWhatsApp = "573001234567"; // ← CAMBIA POR TU NÚMERO REAL (ej: 573101234567)

  return (
    <PageContainer>
      <Section>
        <Title>Nuestros Servicios</Title>
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

export default Servicios;