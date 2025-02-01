import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Arrows = () => {
    return (
        <Container>
			<Row>
				<Col sm={1}>
					<Button size="lg">&#11013;</Button>
				</Col>
				<Col sm={10}>
				</Col>
				<Col sm={1}>
					<Button size="lg">&#10145;</Button>
				</Col>
				
			</Row>
		</Container>
    )
}
export default Arrows;