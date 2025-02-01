import { Row } from "reactstrap"
import { Container, Button } from 'reactstrap'
import NavBar from '../Components/NavBar'



const Home = () => {

    const bannerStyle = () => {
        return ({
            backgroundImage: `url(${require(`../assets/images/Yogi_D.jpg`)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100%',
        })
    }

    return (
        <div style={bannerStyle()} className="d-flex justify-content-center">
            <Container>
                <Row>
                    <NavBar />
                </Row>
                <Row className="d-flex justify-content-center">
                    <h1>YOGA FITNESS</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button color="success" size="lg">New Sequence</Button>
                    <Button color="primary" size="lg">Quick Workout</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Home; 


// import React from 'react';
// import { Container, Row, Col,  Button, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


// const Home = () => {
//     return(
//     <Container>
//         <Row>
//             <Col>
//                 <Card>
//                     <CardImg top width="100%" src="https://dummyimage.com/600x400/000/fff.jpg&text=LOL" alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle tag="h5">Card title</CardTitle>
//                         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//                         <Button>Go somewhere</Button>
//                     </CardBody>
//                 </Card>
//             </Col>
//             <Col>
//                 <Card>
//                     <CardImg top width="100%" src="https://dummyimage.com/600x400/000/fff.jpg&text=LOL" alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle tag="h5">Card title</CardTitle>
//                         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//                         <Button>Go somewhere</Button>
//                     </CardBody>
//                 </Card>
//             </Col>
//             <Col>
//                 <Card>
//                     <CardImg top width="100%" src="https://dummyimage.com/600x400/000/fff.jpg&text=LOL" alt="Card image cap" />
//                     <CardBody>
//                         <CardTitle tag="h5">Card title</CardTitle>
//                         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//                         <Button>Go somewhere</Button>
//                     </CardBody>
//                 </Card>
//             </Col>
//         </Row>
//     </Container>
//     );
// }

// export default Home;