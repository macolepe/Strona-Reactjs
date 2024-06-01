import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function Kontakt() {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Kontakt</h1>
      <Row>
        <Col md={6}>
          <h2>Dane kontaktowe</h2>
          <p>Adres: ul. Przykładowa 123, 00-000 Przykładowo</p>
          <p>Telefon: 123-456-789</p>
          <p>Email: kontakt@example.com</p>
          <Card.Img variant="top" src="https://via.placeholder.com/40" role='button' />
        </Col>
        <Col md={6}>
          <h2>Jesteśmy do Twojej dyspozycji!</h2>
          <p>Jeśli masz jakiekolwiek pytania lub sugestie, skontaktuj się z nami.</p>
          <h2>Formularz kontaktowy</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Imię i nazwisko</Form.Label>
              <Form.Control type="text" placeholder="Wpisz swoje imię i nazwisko" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Wpisz swój email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Wiadomość</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Wpisz swoją wiadomość" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-4">
              Wyślij wiadomość
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
