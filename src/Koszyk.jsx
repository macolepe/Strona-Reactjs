import React, { useState } from 'react';
import { Container, Table, Button, FormControl, InputGroup } from 'react-bootstrap';

export default function Koszyk() {
    const [items, setItems] = useState([
        { id: 1, name: 'Laptop', price: 1000, quantity: 2 },
        { id: 2, name: 'Smartphone', price: 500, quantity: 1 }
    ]);
    const [discountCode, setDiscountCode] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(0);

    const validDiscountCodes = {
        'PROMO10': 10,
        'PROMO20': 20,
        'PROMO50': 50
    };

    const updateQuantity = (id, newQuantity) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const applyDiscount = () => {
        if (validDiscountCodes[discountCode]) {
            setDiscountPercentage(validDiscountCodes[discountCode]);
        } else {
            alert('Nieprawidłowy kod rabatowy');
            setDiscountPercentage(0);
        }
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountedTotal = total - (total * discountPercentage / 100);

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
                            {items.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <InputGroup>
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </Button>
                                            <FormControl
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                className="text-center"
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </Button>
                                        </InputGroup>
                                    </td>
                                    <td className='DeleteButton'>
                                        <Button variant="danger" onClick={() => removeItem(item.id)}>Usuń</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="text-end">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Kod rabatowy"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <Button variant="outline-secondary" onClick={applyDiscount}>
                            Zastosuj
                        </Button>
                    </InputGroup>
                    <h4>Suma: ${discountedTotal.toFixed(2)}</h4>
                    <Button variant="primary">Zamów</Button>
                </div>
            </Container>
        </div>
    );
}
