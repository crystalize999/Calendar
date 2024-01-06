import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import {REGISTRATION_ROUTE} from "../utils/consts";
import Col from 'react-bootstrap/Col'

const Auth = () => {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54 }}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Authorization</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your email'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your password'
                    />
                    <Row className='d-flex justify-content-between mt-3'>
                        <div>
                            Don't have an account? <Col><NavLink to={REGISTRATION_ROUTE}>Register an account</NavLink></Col>
                        </div>
                        <Col><Button
                            variant={"outline-success"}>
                            Login
                        </Button></Col>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;