import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #666;

  svg {
    color: #3498db;
    font-size: 1.5rem;
  }
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled(Field)`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const ErrorText = styled(ErrorMessage)`
  color: #e74c3c;
  font-size: 0.875rem;
`;

const SubmitButton = styled.button`
  background: #3498db;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #2980b9;
  }

  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
  }
`;

const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es requerido'),
  email: Yup.string().email('Email inválido').required('El email es requerido'),
  telefono: Yup.string().required('El teléfono es requerido'),
  fechaLlegada: Yup.date().required('La fecha de llegada es requerida'),
  fechaSalida: Yup.date().required('La fecha de salida es requerida'),
  personas: Yup.number().required('El número de personas es requerido').min(1, 'Mínimo 1 persona'),
  mensaje: Yup.string().required('El mensaje es requerido'),
});

const initialValues = {
  nombre: '',
  email: '',
  telefono: '',
  fechaLlegada: '',
  fechaSalida: '',
  personas: '',
  mensaje: '',
};

function Contacto() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Aquí iría la lógica para enviar el formulario
    console.log(values);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    resetForm();
    setSubmitting(false);
  };

  return (
    <PageContainer>
      <Section>
        <Title>Contacto y Reservas</Title>
        <ContactGrid>
          <ContactInfo>
            <ContactTitle>Información de Contacto</ContactTitle>
            <ContactItem>
              <FaPhone />
              <span>+57 XXX XXX XXXX</span>
            </ContactItem>
            <ContactItem>
              <FaWhatsapp />
              <span>+57 XXX XXX XXXX</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@astromelias.com</span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Salento y Armenia, Colombia</span>
            </ContactItem>
          </ContactInfo>

          <FormContainer>
            <ContactTitle>Formulario de Reserva</ContactTitle>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <StyledForm>
                  <FormGroup>
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input type="text" id="nombre" name="nombre" />
                    <ErrorText name="nombre" component="div" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" />
                    <ErrorText name="email" component="div" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input type="tel" id="telefono" name="telefono" />
                    <ErrorText name="telefono" component="div" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="fechaLlegada">Fecha de llegada</Label>
                    <Input type="date" id="fechaLlegada" name="fechaLlegada" />
                    <ErrorText name="fechaLlegada" component="div" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="fechaSalida">Fecha de salida</Label>
                    <Input type="date" id="fechaSalida" name="fechaSalida" />
                    <ErrorText name="fechaSalida" component="div" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="personas">Número de personas</Label>
                    <Input type="number" id="personas" name="personas" min="1" />
                    <ErrorText name="personas" component="div" />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="mensaje">Mensaje adicional</Label>
                    <Input as="textarea" id="mensaje" name="mensaje" rows="4" />
                    <ErrorText name="mensaje" component="div" />
                  </FormGroup>

                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Reserva'}
                  </SubmitButton>
                </StyledForm>
              )}
            </Formik>
          </FormContainer>
        </ContactGrid>
      </Section>
    </PageContainer>
  );
}

export default Contacto; 