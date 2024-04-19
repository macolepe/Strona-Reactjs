import { Nav, Container } from 'react-bootstrap';

export default function Menu() {
  return (
    <Nav className="flex-column bg-light py-3 sticky-top" style={{ height: '100vh', width: '200px' }}>
      <Container>
        <Nav.Item>
          <Nav.Link href="#">Kategoria 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Kategoria 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Kategoria 3</Nav.Link>
        </Nav.Item>
        {/* Dodaj więcej kategorii według potrzeb */}
      </Container>
    </Nav>
  );
}
