import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'; // Importando Card e Button do react-bootstrap

function Home() {
  return (
    <Container>
    <Row>
        <Col md={4}>
      <Card className="h-100">
        <Card.Img variant="top" src="https://img.freepik.com/free-photo/view-people-learning-how-make-traditional-sushi-dish_23-2151186458.jpg?t=st=1720638910~exp=1720642510~hmac=fb750a36c30134defd70857c8f2847b32ae0fd55c3f1da61f1175da255870ada&w=360" />
        <Card.Body>
          <Card.Title>Artes culinárias compartilhadas</Card.Title>
          <Card.Text className="h-80">
          Em um cenário tranquilo, um homem habilidoso prepara sushi vegano com destreza e paixão. Seus movimentos precisos e ingredientes frescos são uma celebração da comida saudável e da criatividade culinária. Observando com curiosidade, um gato presta atenção, capturando o espírito de amizade entre humanos e animais enquanto compartilham momentos culinários memoráveis.
          </Card.Text>
          <Button variant="primary" className="w-100">Go somewhere</Button>
        </Card.Body>
      </Card>
        </Col>

        <Col md={4}>
      <Card className="h-100">
        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/portrait-stylish-senior-woman-wearing-colorful-jewelry-standing-against-yellow-background_1048944-30195394.jpg?w=360" />
        <Card.Body>
          <Card.Title>Elegância e alegria sem limites</Card.Title>
          <Card.Text className="h-80">
          Com um sorriso que ilumina qualquer ambiente, esta mulher idosa personifica a elegância atemporal e a alegria de viver. Vestida com joias coloridas, ela brilha contra o fundo amarelo, destacando sua personalidade vibrante e sua sabedoria acumulada ao longo dos anos. Um exemplo inspirador de como a felicidade transcende todas as idades.
          </Card.Text>
          <Button variant="primary" className="w-100">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col md={4}>
      <Card className="h-100">
        <Card.Img variant="top" src="https://img.freepik.com/fotos-gratis/um-belo-buque-de-rosas-decoradas_23-2151618004.jpg?t=st=1720638543~exp=1720642143~hmac=dbf4da17ec7a8725c558107c332befc34bf9a26f493195df5e4cac67d91e0983&w=360" />
        <Card.Body>
          <Card.Title>Beleza em cada pétala</Card.Title>
          <Card.Text className="h-80">
          Celebrando a natureza em toda a sua glória, esta imagem captura a essência da beleza natural. Um buquê vibrante de flores enche o ambiente com cores vivas e perfumes encantadores, refletindo a delicadeza e a elegância que a natureza oferece. Cada pétala é uma obra-prima, um lembrete gentil da beleza que floresce ao nosso redor.
          </Card.Text>
          <Button variant="primary" className="w-100">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    </Container>
  );
}

export default Home;