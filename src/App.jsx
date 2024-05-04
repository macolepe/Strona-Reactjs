import Menu from './Menu.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Layout from './Layout.jsx';
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2}>
            <Menu />
          </Col>
          <Col md={10}>
            <Layout />
          </Col>
        </Row>
      </Container>
      < Footer />
    </>
  );
}

