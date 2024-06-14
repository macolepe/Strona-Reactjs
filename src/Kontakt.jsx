import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

export default function Kontakt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Kontakt</h1>
      <Row>
        <Col md={6}>
          <h2>Dane kontaktowe</h2>
          <p>Adres: ul. Przykładowa 123, 00-000 Przykładowo</p>
          <p>Telefon: 123-456-789</p>
          <p>Email: kontakt@example.com</p>
          <Card.Img variant="top" src="https://via.placeholder.com/40" role="button" />
        </Col>
        <Col md={6}>
          <h2>Jesteśmy do Twojej dyspozycji!</h2>
          <p>Jeśli masz jakiekolwiek pytania lub sugestie, skontaktuj się z nami.</p>
          <h2>Formularz kontaktowy</h2>
          {submitted ? (
            <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
              <Alert.Heading>Wiadomość została wysłana!</Alert.Heading>
              <p>
                <strong>Temat:</strong> {subject}
                <br />
                <strong>Imię i nazwisko:</strong> {name}
                <br />
                <strong>Email:</strong> {email}
                <br />
                <strong>Wiadomość:</strong> {message}
              </p>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleReset}>
                  Wyślij kolejną wiadomość
                </Button>
              </div>
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Imię i nazwisko</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Wpisz swoje imię i nazwisko"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Wpisz swój email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formSubject">
                <Form.Label>Temat</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Wpisz temat wiadomości"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Wiadomość</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Wpisz swoją wiadomość"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-4">
                Wyślij wiadomość
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}
