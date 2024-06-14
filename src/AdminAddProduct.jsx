import React, { useState } from 'react';
import { Container, Form, Button, Toast } from 'react-bootstrap';
import { useProductContext } from './ProductContext';

export default function AddProduct() {
  const { addProduct } = useProductContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [recommendedProduct, setRecommendedProduct] = useState(false);
  const [bestseller, setBestseller] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      price: parseFloat(price),
      category,
      recommendedProduct,
      bestseller,
    };
    addProduct(newProduct);
    setTitle('');
    setDescription('');
    setPrice(0);
    setCategory('');
    setRecommendedProduct(false);
    setBestseller(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <Container id="addProduct" className="mt-4">
      <h1 className="text-center mb-4">Dodawanie produktu</h1>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 9999,
          minWidth: 300,
        }}
        delay={3000}
        autohide
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Powiadomienie</strong>
        </Toast.Header>
        <Toast.Body>Produkt został pomyślnie dodany!</Toast.Body>
      </Toast>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Tytuł</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wprowadź tytuł produktu"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Wprowadź opis produktu"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Cena</Form.Label>
          <Form.Control
            type="number"
            placeholder="Wprowadź cenę produktu"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Kategoria</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Wybierz kategorię</option>
            <option>Laptopy</option>
            <option>Smartfony</option>
            <option>Tablety</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="recommendedProduct">
          <Form.Check
            type="checkbox"
            label="Polecany produkt"
            checked={recommendedProduct}
            onChange={(e) => setRecommendedProduct(e.target.checked)}
          />
        </Form.Group>

        <Form.Group controlId="bestseller">
          <Form.Check
            type="checkbox"
            label="Bestseller"
            checked={bestseller}
            onChange={(e) => setBestseller(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-4">
          Dodaj produkt
        </Button>
      </Form>
    </Container>
  );
}
