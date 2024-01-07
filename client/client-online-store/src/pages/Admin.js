import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateProduct from "../components/modals/CreateProduct";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Col><Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>
                Add type<
                /Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setBrandVisible(true)}>
                Add brand
            </Button>
            <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setProductVisible(true)}>
                Add product
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container></Col>
    );
};

export default Admin;