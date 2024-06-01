import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function AddProduct() {
    return (
        <Container id='addProduct' className="mt-4">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-center mb-4">Dodawanie produktu</h1>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>Tytuł</Form.Label>
                            <Form.Control type="text" placeholder="Wprowadź tytuł produktu" />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Opis</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Wprowadź opis produktu" />
                        </Form.Group>

                        <Form.Group controlId="image">
                            <Form.Label>Zdjęcie</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Cena</Form.Label>
                            <Form.Control type="number" placeholder="Wprowadź cenę produktu" />
                        </Form.Group>

                        <Form.Group controlId="category">
                            <Form.Label>Kategoria</Form.Label>
                            <Form.Control as="select">
                                <option>Wybierz kategorię</option>
                                <option>Laptopy</option>
                                <option>Smartfony</option>
                                <option>Tablety</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-4">
                            Dodaj produkt
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
