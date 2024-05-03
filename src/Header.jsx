import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function Header() {
  return (
    <Card className="bg-dark text-white rounded-0">
      <Card.Body>
        <Container className='d-flex justify-content-between align-items-center'>
          <h1>Witaj w Sklepie Elektronicznym</h1>
          <div className="d-flex">
            <p className="text-white text-decoration-none mx-2" role='button'>O nas</p>
            <p className="text-white text-decoration-none mx-2" role='button'>Kontakt</p>
            <p className="text-white text-decoration-none mx-2" role='button'>Dlaczego my</p>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
}
