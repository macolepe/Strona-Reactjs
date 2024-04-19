import Menu from './Menu.jsx';
import Header from './Header.jsx';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';

export default function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3} className="px-0">
            <Menu />
          </Col>
          <Col md={9} className="px-0">
            <Header />
            <Container>
              <h2 className="py-4">Polecane Produkty</h2>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Produkt 1</Card.Title>
                      <Card.Text>
                        Opis
                      </Card.Text>
                      <Button variant="primary">Kup teraz</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Produkt 2</Card.Title>
                      <Card.Text>
                        Opis
                      </Card.Text>
                      <Button variant="primary">Kup teraz</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Produkt 3</Card.Title>
                      <Card.Text>
                        Opis
                      </Card.Text>
                      <Button variant="primary">Kup teraz</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </Container>
            <Container>
              <h2 className="py-4">Bestsellery</h2>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Bestseller 1</Card.Title>
                      <Card.Text>
                        Opis
                      </Card.Text>
                      <Button variant="primary">Kup teraz</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Bestseller 2</Card.Title>
                      <Card.Text>
                        Opis
                      </Card.Text>
                      <Button variant="primary">Kup teraz</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                      <Card.Title>Bestseller 3</Card.Title>
                      <Card.Text>
                        Opis
                      </Card.Text>
                      <Button variant="primary">Kup teraz</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Container>
              <h2 className="py-4">Popularne Kategorie</h2>
              <Row>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Kategoria 1</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Kategoria 2</Card.Title>

                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Kategoria 3</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-light text-center py-4 mt-5">
        <Container>
          &copy; 2024 Sklep Elektroniczny
        </Container>
      </footer>
    </div>
  );
}

