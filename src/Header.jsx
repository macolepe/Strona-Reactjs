import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Card className="bg-dark text-white rounded-0">
      <Card.Body>
        <Container className='d-flex justify-content-between align-items-center'>
          <Link to="/" className="text-white text-decoration-none mx-2" role='button'>
            <h1>Sklep Elektroniczny</h1>
          </Link>
          <div className="d-flex">
            <Link to="/onas" className="text-white text-decoration-none mx-2" role='button'>O nas</Link>
            <Link to="/kontakt" className="text-white text-decoration-none mx-2" role='button'>Kontakt</Link>
            <Link to="/dlaczegomy" className="text-white text-decoration-none mx-2" role='button'>Dlaczego my</Link>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
}
