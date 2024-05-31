import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
