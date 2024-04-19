import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default function Market() {
  return (
    <Container fluid>
        <Form>
            <Row>
                <Col xs="auto" className="pb-3">
                    <Button variant="primary">Zapisz</Button>
                    <Button variant="primary" className="ms-1">Anuluj</Button>
                </Col>
            </Row>
            <Row>
                <Tabs
                    defaultActiveKey="danePodstawowe"
                    id="danePracownika"
                    className="mb-3"
                >
                    <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Imie</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Stanowisko</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Wynagrodzenie netto</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Opis</Form.Label>
                                <Form.Control as="textarea" />
                            </Form.Group>
                        </Row>
                    </Tab>
                    <Tab eventKey="daneKontaktowe" title="DaneKontaktowe">
                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Miejscowosc</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Numer domu</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Numer lokalu</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kod pocztowy</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Poczta</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kraj</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Wojewodztwo</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="daneDodatkowe" title="Dane dodatkowe">
                        <Row>
                            <Col xs={8}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Informacje dodatkowe</Form.Label>
                                    <Form.Control as="textarea" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                <Form.Label>Uwagi</Form.Label>
                                <Form.Control as="textarea" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Row>
        </Form>
    </Container>
)
}


