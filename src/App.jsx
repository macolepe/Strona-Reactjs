import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ProductProvider } from './ProductContext';

export default function App() {
  return (
    <ProductProvider>
      <div id='MainContent'>
        <Header />
        <Container fluid>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </ProductProvider>
  );
}
