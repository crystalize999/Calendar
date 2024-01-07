import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import Col from "react-bootstrap/Col";

const CreateProduct = ({show, onHide}) => {
    const {product} = useContext(Context);
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description:'', number: Date.now()}])
    }

    const remoInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add prodcut
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Select the type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Select the brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter the name of the product"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter the cost of the product"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add a new property
                    </Button>
                    {info.map(i =>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder="Enter the name of the property"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder="Enter a description"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        onClick={() => remoInfo(i.number)}
                                        variant={"outline-danger"}>
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;