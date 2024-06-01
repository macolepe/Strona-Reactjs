import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

export default function Koszyk() {
    return (
        <div id='Koszyk'>
            <Container className="d-flex flex-column justify-content-between">
                <div>
                    <h1 className="mb-4">Koszyk</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nazwa Produktu</th>
                                <th>Cena</th>
                                <th>Ilość</th>
                                <th>Usuń</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Laptop</td>
                                <td>$1000</td>
                                <td>2</td>
                                <td><Button variant="danger">Usuń</Button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Smartphone</td>
                                <td>$500</td>
                                <td>1</td>
                                <td><Button variant="danger">Usuń</Button></td>
                            </tr>
                            {/* Dodaj więcej wierszy, jeśli masz więcej produktów w koszyku */}
                        </tbody>
                    </Table>
                </div>
                <div className="text-end">
                    <h4>Suma: $2500</h4>
                    <Button variant="primary">Zamów</Button>
                </div>
            </Container>
        </div>
    );
}
