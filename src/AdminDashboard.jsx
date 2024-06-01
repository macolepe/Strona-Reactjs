import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Dashboard() {
    const tickets = [
        { id: 1, title: 'dostawa' },
        { id: 2, title: 'gwarancja' },
        { id: 3, title: 'temat' }
    ];

    const orders = [
        { id: 4241, city: 'Warszawa', itemCount: 5 },
        { id: 1234, city: 'Kraków', itemCount: 3 },
        { id: 4321, city: 'Gdańsk', itemCount: 7 }
    ];

    return (
        <Container id='dashboard' className="mt-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Ilość zakupów</h3>
                            <h1>123</h1>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Lista użytkowników</h3>
                            <h1>10</h1> {/* Wyświetl liczność użytkowników */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Otwarte tickety ({tickets.length})</h3>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                {tickets.map(ticket => (
                                    <li key={ticket.id} className="mb-2 d-flex justify-content-between align-items-center">
                                        <span>{`${ticket.id} - temat: ${ticket.title}`}</span>
                                        <Button variant="primary">Zobacz więcej</Button>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Zamówienia ({orders.length})</h3>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                {orders.map(order => (
                                    <li key={order.id} className="mb-2 d-flex justify-content-between align-items-center">
                                        <span>{`id: ${order.id} - ${order.itemCount} sztuk - ${order.city}`}</span>
                                        <Button variant="primary">Zobacz więcej</Button>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
