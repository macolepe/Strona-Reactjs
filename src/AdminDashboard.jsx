import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

export default function Dashboard() {
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [reply, setReply] = useState('');

    const tickets = [
        { id: 1, title: 'dostawa', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'gwarancja', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, title: 'temat', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    ];

    const orders = [
        { id: 4241, city: 'Warszawa', itemCount: 5, name: 'Jan Kowalski', address: 'ul. Nowa 5', items: 'Laptop, Telefon', price: 3000, deliveryOption: 'Kurier' },
        { id: 1234, city: 'Kraków', itemCount: 3, name: 'Anna Nowak', address: 'ul. Stara 2', items: 'Tablet, Zegarek', price: 1500, deliveryOption: 'Paczkomat' },
        { id: 4321, city: 'Gdańsk', itemCount: 7, name: 'Piotr Zieliński', address: 'ul. Środkowa 10', items: 'Komputer, Myszka, Klawiatura', price: 5000, deliveryOption: 'Kurier' }
    ];

    const handleTicketClick = (ticket) => {
        setSelectedTicket(ticket);
        setShowTicketModal(true);
    };

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
        setShowOrderModal(true);
    };

    const handleReplyChange = (e) => {
        setReply(e.target.value);
    };

    const handleReplySubmit = () => {
        alert(`Odpowiedź: ${reply}`);
        setReply('');
        setShowTicketModal(false);
    };

    return (
        <Container id='dashboard' className="mt-4">
            <Row>
                <Col>
                    <Card className="text-center mb-4 shadow-sm border-0">
                        <Card.Body className="bg-primary text-white rounded">
                            <h3 className="text-uppercase">Ilość zakupów</h3>
                            <h1 className="display-4">123</h1>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center mb-4 shadow-sm border-0">
                        <Card.Body className="bg-success text-white rounded">
                            <h3 className="text-uppercase">Lista użytkowników</h3>
                            <h1 className="display-4">10</h1>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="mb-4 shadow-sm border-0">
                        <Card.Body className="bg-light rounded">
                            <h3 className="text-uppercase text-secondary">Otwarte tickety ({tickets.length})</h3>
                            <ul className="list-unstyled">
                                {tickets.map(ticket => (
                                    <li key={ticket.id} className="mb-3 d-flex justify-content-between align-items-center">
                                        <span className="font-weight-bold text-dark">{`${ticket.id} - ${ticket.title}`}</span>
                                        <Button variant="outline-info" onClick={() => handleTicketClick(ticket)}>Zobacz więcej</Button>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-4 shadow-sm border-0">
                        <Card.Body className="bg-light rounded">
                            <h3 className="text-uppercase text-secondary">Zamówienia ({orders.length})</h3>
                            <ul className="list-unstyled">
                                {orders.map(order => (
                                    <li key={order.id} className="mb-3 d-flex justify-content-between align-items-center">
                                        <span className="font-weight-bold text-dark">{`ID: ${order.id} - ${order.itemCount} sztuk - ${order.city}`}</span>
                                        <Button variant="outline-info" onClick={() => handleOrderClick(order)}>Zobacz więcej</Button>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            {selectedTicket && (
                <Modal show={showTicketModal} onHide={() => setShowTicketModal(false)} centered>
                    <Modal.Header closeButton className="bg-info text-white">
                        <Modal.Title>Szczegóły Ticketa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-light">
                        <h5 className="font-weight-bold">{selectedTicket.title}</h5>
                        <p>{selectedTicket.description}</p>
                        <Form>
                            <Form.Group controlId="replyForm">
                                <Form.Label>Odpowiedź</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={reply}
                                    onChange={handleReplyChange}
                                    placeholder="Wpisz swoją odpowiedź tutaj"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="bg-light">
                        <Button variant="secondary" onClick={() => setShowTicketModal(false)}>
                            Zamknij
                        </Button>
                        <Button variant="primary" onClick={handleReplySubmit}>
                            Wyślij odpowiedź
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            {/* Order Modal */}
            {selectedOrder && (
                <Modal show={showOrderModal} onHide={() => setShowOrderModal(false)} centered>
                    <Modal.Header closeButton className="bg-info text-white">
                        <Modal.Title>Szczegóły Zamówienia</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-light">
                        <h5 className="font-weight-bold">Zamówienie ID: {selectedOrder.id}</h5>
                        <p><strong>Imię i Nazwisko:</strong> {selectedOrder.name}</p>
                        <p><strong>Adres:</strong> {selectedOrder.address}</p>
                        <p><strong>Miasto:</strong> {selectedOrder.city}</p>
                        <p><strong>Przedmioty:</strong> {selectedOrder.items}</p>
                        <p><strong>Cena:</strong> ${selectedOrder.price}</p>
                        <p><strong>Opcja dostawy:</strong> {selectedOrder.deliveryOption}</p>
                        <p><strong>Łączna liczba przedmiotów:</strong> {selectedOrder.itemCount}</p>
                    </Modal.Body>
                    <Modal.Footer className="bg-light">
                        <Button variant="secondary" onClick={() => setShowOrderModal(false)}>
                            Zamknij
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
}
