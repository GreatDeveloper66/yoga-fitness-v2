import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, Form, Alert } from 'reactstrap';
import Email from '../Components/Email';
import UserName from '../Components/UserName';
import ConfirmPassword from '../Components/ConfirmPassword';


const Register = () => {
        return (
            <div style={this.bannerStyle()} className="d-flex justify-content-center align-items-center">
			<Container className="mt-5">
			<Row className="d-flex justify-content-center mt-5">
				<Col xs={12} sm={8} lg={4}>
				<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
				<h2>Register</h2>
			<Form className="form" onSubmit={this.handleRegistration}>
				<Email email={"email@email.com"}/>
			<UserName username={"username here"}/>
				<ConfirmPassword />
				<Col className="d-flex justify-content-around">
				<Button onClick={() => this.props.history.push('/')}>Already Registered?</Button>
				<Button type="submit">Submit</Button>
				</Col>
			</Form>
		</Card>
		</Col>
		</Row>
		<Row className="d-flex justify-content-center">
			<Col xs={12} sm={8} lg={4}>
				{this.state.registerMessage ? <Alert color="danger">{this.state.registerMessage}</Alert> : ''}
			</Col>
		</Row>
		</Container>
		</div>
        )
    }
export default Register;