import Cart from './images/shopping cart.svg'
import Menu from './Menu';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';

export default function Layout() {
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
                    <Col md={4}>
                        <Card >
                            <Card.Img variant="top" src="https://via.placeholder.com/150" role='button' />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <p>Produkt 1</p>
                                    <p>00.00$</p>
                                </Card.Title>
                                <Card.Text>
                                    Opis
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Kup teraz</Button>
                                    <Button variant="primary"><img src={Cart} /></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" role='button' />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <p>Produkt 2</p>
                                    <p>00.00$</p>
                                </Card.Title>
                                <Card.Text>
                                    Opis
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Kup teraz</Button>
                                    <Button variant="primary"><img src={Cart} /></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" role='button' />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <p>Produkt 3</p>
                                    <p>00.00$</p>
                                </Card.Title>
                                <Card.Text>
                                    Opis
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Kup teraz</Button>
                                    <Button variant="primary"><img src={Cart} /></Button>
                                </div>
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
                            <Card.Img variant="top" src="https://via.placeholder.com/150" role='button' />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <p>Bestseller 1</p>
                                    <p>00.00$</p>
                                </Card.Title>
                                <Card.Text>
                                    Opis
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Kup teraz</Button>
                                    <Button variant="primary"><img src={Cart} /></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" role='button' />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <p>Bestseller 2</p>
                                    <p>00.00$</p>
                                </Card.Title>
                                <Card.Text>
                                    Opis
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Kup teraz</Button>
                                    <Button variant="primary"><img src={Cart} /></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" role='button' />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-between'>
                                    <p>Bestseller 3</p>
                                    <p>00.00$</p>
                                </Card.Title>
                                <Card.Text>
                                    <p>Opis</p>
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary">Kup teraz</Button>
                                    <Button variant="primary"><img src={Cart} /></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
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
    )
}