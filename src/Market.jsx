import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export default function Produkt() {
  const [selectedImage, setSelectedImage] = useState("https://via.placeholder.com/450");

  const images = [
    "https://via.placeholder.com/450",
    "https://via.placeholder.com/450/111",
    "https://via.placeholder.com/450/222"
  ];

  return (
    <Container id='produkt'>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <div className="text-center" style={{ height: '450px' }}>
              <Card.Img
                variant="top"
                src={selectedImage}
                style={{ height: '100%', objectFit: 'contain' }}
              />
            </div>
            <Card.Body>
              <Row>
                {images.map((image, index) => (
                  <Col key={index} className="mb-2">
                    <img
                      src={image}
                      alt={`Product thumbnail ${index + 1}`}
                      className="img-fluid"
                      style={{ cursor: 'pointer', width: '100%', marginBottom: '10px' }}
                      onClick={() => setSelectedImage(image)}
                    />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>
                <h1>Produkt 1</h1>
              </Card.Title>
              <Row>
                <Col md={6}>
                  <Card.Text>
                    <strong>Krótki opis produktu:</strong> To jest bardzo interesujący produkt, który warto kupić.
                  </Card.Text>
                  <Link to="#full-description" className="btn btn-link p-0">Pełny opis produktu ↓</Link>
                </Col>
                <Col md={6} className="text-right">
                  <h2>00.00$</h2>
                  <Button variant="primary" className="mr-2">Kup teraz</Button>
                  <Button variant="secondary">Dodaj do koszyka</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-4">
          <Card.Body>
      <Card.Title>
        <h1 className="mb-4">Opcje dostawy</h1>
      </Card.Title>
      <Card.Text className="mb-2">
        <p className="mb-1">Paczkomat</p>
        <p className="mb-1">Pobraniowo</p>
        <p className="mb-1">Odbiór w punkcie</p>
      </Card.Text>
      <Button variant="secondary" className="float-right">Zobacz więcej</Button>
    </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card id="full-description">
            <Card.Body>
              <Card.Title>
                <h3>Szczegółowy opis produktu</h3>
              </Card.Title>
              <Row>
                <Col md={4}>
                  <img src="https://via.placeholder.com/300" alt="Opis produktu" className="img-fluid mb-4" style={{ width: '100%' }} />
                </Col>
                <Col md={8}>
                  <Card.Text>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <img src="https://via.placeholder.com/300" alt="Opis produktu" className="img-fluid mb-4" style={{ width: '100%' }} />
                </Col>
                <Col md={6}>
                  <Card.Text>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <img src="https://via.placeholder.com/300" alt="Opis produktu" className="img-fluid mb-4" style={{ width: '100%' }} />
                </Col>
                <Col md={9}>
                  <Card.Text>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
