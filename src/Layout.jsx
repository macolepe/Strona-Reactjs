import React from 'react';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import { useProductContext } from './ProductContext';
import Cart from './images/shopping cart.svg';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Layout() {
  const { products } = useProductContext();

  const recommendedProducts = products.filter(product => product.recommendedProduct);
  const bestsellerProducts = products.filter(product => product.bestseller);

  return (
    <>
      <Row>
        <Col md={2}>
          <Menu />
        </Col>
        <Col md={10}>
          <Container>
            <h2 className="py-4">Polecane Produkty</h2>
            <Row>
              {recommendedProducts.map(product => (
                <Col md={4} key={product.id}>
                  <Card>
                    <Link to={`/produkt`} className="text-decoration-none">
                      <Card.Img variant="top" src={`https://via.placeholder.com/150`} role='button' />
                    </Link>
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between'>
                        <p>{product.title}</p>
                        <p>{product.price.toFixed(2)}$</p>
                      </Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button variant="primary">Kup teraz</Button>
                        <Button variant="primary"><img src={Cart} alt="Koszyk" /></Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container>
            <h2 className="py-4">Bestsellery</h2>
            <Row>
              {bestsellerProducts.map(product => (
                <Col md={4} key={product.id}>
                  <Card>
                    <Link to={`/produkt`} className="text-decoration-none">
                      <Card.Img variant="top" src={`https://via.placeholder.com/150`} role='button' />
                    </Link>
                    <Card.Body>
                      <Card.Title className='d-flex justify-content-between'>
                        <p>{product.title}</p>
                        <p>{product.price.toFixed(2)}$</p>
                      </Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button variant="primary">Kup teraz</Button>
                        <Button variant="primary"><img src={Cart} /></Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container>
            <h2 className="py-4">Popularne Kategorie</h2>
            <Row>
              <Col md={4}>
                <Card role='button'>
                  <Card.Body className='text-center'>
                    <Card.Title>Kategoria 1</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card role='button'>
                  <Card.Body className='text-center'>
                    <Card.Title>Kategoria 2</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card role='button'>
                  <Card.Body className='text-center'>
                    <Card.Title>Kategoria 3</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}
