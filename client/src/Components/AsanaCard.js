import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


const AsanaCard = () => {
    return (
        <Card>
			<CardImg top width="100%" alt="asana" />
				<CardBody className="text-center">
					<CardTitle className="text-primary"><h5>"title"</h5></CardTitle>
					<CardSubtitle><h6>"subtitle"</h6></CardSubtitle>
				</CardBody>				
		</Card>

    )
}

export default AsanaCard;