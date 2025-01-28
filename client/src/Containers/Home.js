import React from 'react';
import { Container, Row, Col,  Button, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


const Home = () => {
    return(
    <Container>
        <Row>
            <Col>
                <Card>
                    <CardImg top width="100%" src="https://dummyimage.com/600x400/000/fff.jpg&text=LOL" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardImg top width="100%" src="https://dummyimage.com/600x400/000/fff.jpg&text=LOL" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card>
                    <CardImg top width="100%" src="https://dummyimage.com/600x400/000/fff.jpg&text=LOL" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
    );
}

export default Home;