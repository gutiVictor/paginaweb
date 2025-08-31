import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBed, FaCar, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoImage from '../imagenes/logo.png';

// === LOGO ===
const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    height: 160px;
    width: auto;
    margin-right: 10px;
  }

  &:hover {
    color: #f1c40f;
  }
`;

// === HERO SECTION ===
const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1598376270480-b974417324dd?q=80&w=827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 1rem;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.0rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

// === TESTIMONIAL DESTACADO EN EL HERO ===
const HighlightTestimonial = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #f1c40f;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: fadeInUp 1s ease-out;

  &::before {
    content: "❤️";
    font-size: 1.5rem;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-3px);
  }
`;

// === CONTADOR DE VISITAS ===
const VisitCounter = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0.95;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

const EyeIcon = styled.span`
  font-size: 1.3rem;
  animation: blink 3s infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

const CountNumber = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

// === SECCIÓN DE SERVICIOS ===
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

// === SECCIÓN DE TESTIMONIOS ===
const TestimonialsSection = styled.section`
  padding: 5rem 1rem;
  background: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const TestimonialCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '"';
    font-size: 5rem;
    color: #f1c40f;
    opacity: 0.2;
    position: absolute;
    top: 10px;
    left: 20px;
    line-height: 1;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f1c40f;
`;

const AuthorInfo = styled.div`
  text-align: left;

  h4 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: #7f8c8d;
    font-size: 0.9rem;
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

// === DATOS DE TESTIMONIOS ===
const testimonials = [
  {
    id: 1,
    text: "Grano y Hogar hizo realidad nuestro sueño de tener un apartamento en Salento. El trato fue excepcional, profesional y cálido. ¡Altamente recomendados!",
    name: "Ana María Gómez",
    location: "Familia de Bogotá",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUVCCjJP-dG9Z842tzScz6VAIT6Xlhdjhww&s"
  },
  {
    id: 2,
    text: "Alquilamos por temporada y la atención fue impecable. Desde el check-in hasta las recomendaciones locales, todo fue perfecto. Volveremos sin duda.",
    name: "Carlos Rivera",
    location: "Visita desde Medellín",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    text: "Compramos una propiedad a través de ellos y todo el proceso fue transparente y seguro. Confiamos plenamente desde el primer contacto.",
    name: "Lucía Pérez",
    location: "Inversionista de Cali",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    text: "Alquilamos por temporada y la atención fue impecable. Desde el check-in hasta las recomendaciones locales, todo fue perfecto. Volveremos sin duda.",
    name: "Alexander",
    location: "Visita desde Santa Andres",
    image: "data:image/jpeg;base64,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......"
  }
];

// === CONFIGURACIÓN DEL SLIDER ===
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  adaptiveHeight: true,
  className: "center",
  centerMode: true,
  centerPadding: "10px",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 1
      }
    }
  ]
};

// === COMPONENTE PRINCIPAL ===
function Home() {
  const [count, setCount] = useState(25000);

  useEffect(() => {
    const savedCount = localStorage.getItem('visitCount');
    let currentCount;

    if (savedCount) {
      currentCount = parseInt(savedCount, 10);
    } else {
      currentCount = 25000;
    }

    const increment = Math.floor(Math.random() * 3) + 1;
    const newCount = currentCount + increment;

    let start = 25000;
    const end = newCount;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        localStorage.setItem('visitCount', end.toString());
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // === CONFIGURACIÓN DE WHATSAPP ===
  const mensajeWhatsApp = encodeURIComponent(
    "Hola, vi su sitio web y me gustaría obtener más información sobre sus apartamentos. ¡Gracias!"
  );
  const numeroWhatsApp = "573218907254"; // ← CAMBIA ESTE NÚMERO POR EL TUYO

  return (
    <>
      {/* === HERO === */}
      <HeroSection>
        <HeroContent>
          <Logo to="/">
            <img src={logoImage} alt="Grano y Hogar" />
            <span>Grano y Hogar</span>
          </Logo>
          <Title>Bienvenido a tu próximo hogar</Title>
          <Subtitle>Donde tu sueño empieza a crecer</Subtitle>
          <HighlightTestimonial>+150 familias felices y contando</HighlightTestimonial>
          <CTAButton to="/apartamentos">Ver Apartamentos</CTAButton>

          {/* Contador animado */}
          <VisitCounter>
            <EyeIcon>👁️</EyeIcon>
            <span>Más de <CountNumber>{count.toLocaleString()}</CountNumber> visitas este año</span>
          </VisitCounter>
        </HeroContent>
      </HeroSection>

      {/* === SERVICIOS === */}
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

      {/* === TESTIMONIOS === */}
      <TestimonialsSection>
        <SectionTitle>Lo que dicen nuestros clientes</SectionTitle>
        <Slider {...sliderSettings}>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id}>
              <TestimonialText>{item.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorImage src={item.image} alt={item.name} />
                <AuthorInfo>
                  <h4>{item.name}</h4>
                  <p>{item.location}</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </Slider>
      </TestimonialsSection>

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
    </>
  );
}

export default Home;