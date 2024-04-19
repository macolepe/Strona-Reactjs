import { Container, Card } from 'react-bootstrap';

export default function Header() {
    return (
        <Card className="bg-info text-white">
          <Card.Body>
            <Container>
              <h1>Witaj w Sklepie Elektronicznym</h1>
              {/* Dodaj więcej elementów nagłówka według potrzeb */}
            </Container>
          </Card.Body>
        </Card>
      );
    }