import { Button } from "reactstrap"
import { Container, Row, ButtonGroup } from 'reactstrap'


const NavBar = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-end align-items-start">
                <ButtonGroup>
                    <Button color="primary">Home</Button>
                    <Button color="success">Profile</Button>
                    <Button color="info">Sign Out</Button>
                </ButtonGroup>
            </Row>
        </Container>
    )}

export default NavBar