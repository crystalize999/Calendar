import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import Col from 'react-bootstrap/Col'


const BrandBar = observer ( () => {
    const {product} = useContext(Context)

    return (
        <Col><Row className='d-flex row'>
            {product.brands.map(brand =>
                <Col><Card
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    className='p-3'
                    onClick={() => product.setSelectedBrand(brand)}
                    border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card></Col>
            )}
        </Row></Col>
    );
});

export default BrandBar;