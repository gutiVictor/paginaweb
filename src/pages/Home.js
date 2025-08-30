import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBed, FaCar, FaMapMarkedAlt } from 'react-icons/fa';
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
    image: "data:image/jpeg;base64,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"
  },
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
    </>
  );
}

export default Home;