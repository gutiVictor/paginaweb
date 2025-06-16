import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactoContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactoInfo = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ContactoForm = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #2980b9;
  }
`;

const ContactoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: #3498db;
`;

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!formData.nombre || !formData.email || !formData.telefono || !formData.mensaje) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    // Crear el mensaje para WhatsApp con formato mejorado
    const mensaje = `*Nueva solicitud de reserva - Apartamentos Las Astromelias*\n\n` +
      `*Información del cliente:*\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Teléfono:* ${formData.telefono}\n\n` +
      `*Mensaje:*\n${formData.mensaje}\n\n` +
      `*Fecha de solicitud:* ${new Date().toLocaleString('es-ES')}`;
    
    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp del administrador (reemplazar con el número correcto)
    const numeroWhatsApp = '573218907254';
    
    // Redirigir a WhatsApp con el mensaje
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
    
    // Limpiar el formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });

    // Mostrar mensaje de confirmación
    alert('¡Gracias por contactarnos! Serás redirigido a WhatsApp para completar tu solicitud.');
  };

  return (
    <ContactoContainer>
      <h1>Contacto</h1>
      <p>Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros apartamentos y servicios.</p>

      <ContactoGrid>
        <ContactoInfo>
          <h2>Información de Contacto</h2>
          <ContactoItem>
            <Icon><FaWhatsapp /></Icon>
            <div>
              <h3>WhatsApp</h3>
              <p>+57 321 8907254</p>
            </div>
          </ContactoItem>
          <ContactoItem>
            <Icon><FaEnvelope /></Icon>
            <div>
              <h3>Email</h3>
              <p>info@astromelias.com</p>
            </div>
          </ContactoItem>
          <ContactoItem>
            <Icon><FaPhone /></Icon>
            <div>
              <h3>Teléfono</h3>
              <p>+57 321 8907254</p>
            </div>
          </ContactoItem>
          <ContactoItem>
            <Icon><FaMapMarkerAlt /></Icon>
            <div>
              <h3>Ubicación</h3>
              <p>Salento y Armenia, Colombia</p>
            </div>
          </ContactoItem>
        </ContactoInfo>

        <ContactoForm onSubmit={handleSubmit}>
          <h2>Envíanos un mensaje</h2>
          <FormGroup>
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mensaje">Mensaje</Label>
            <TextArea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">
            <FaWhatsapp /> Enviar por WhatsApp
          </Button>
        </ContactoForm>
      </ContactoGrid>
    </ContactoContainer>
  );
};

export default Contacto; 