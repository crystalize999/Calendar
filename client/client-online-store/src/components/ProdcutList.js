import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import ProductItem from "./ProductItem";


const ProdcutList = observer(() => {
    const {product} = useContext(Context)
    return (
        <Col>
            <Row className='d-flex'>
                {product.products.map(product =>
                    <ProductItem key={product.id} product={product}/>
                )}
            </Row>
        </Col>
    );
});

export default ProdcutList;