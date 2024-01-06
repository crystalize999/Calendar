import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {Button, Card, Image, Row} from "react-bootstrap";
import Star2 from '../assets/Star2.png'

const ProductPage = () => {
    const product = {id: 1, name: "Mini 6", price: 24000, rating: 5, img: "7ff8aed5-4dd9-4649-ae09-f3f016feac68.jpg"}
    const description = [
        {id: 1, title: 'RAM', description: '4 GB'},
        {id: 2, title: 'Camera', description: '12 MP'},
        {id: 3, title: 'Processor', description: 'Apple A15 Bionic'},
        {id: 4, title: 'Number of cores', description: '6'},
        {id: 5, title: 'Battery', description: '5034'},
    ]
    return (
        <Container className='mt-3'>
            <Col><Row>
                <Col md={4}>
                    <Image width={300} height={300} src={product.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 style={{display:"contents"}}>{product.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${Star2}) no-repeat center center`, width:240, height: 240, backgroundSize:'cover', fontSize: 64}}
                        >
                            {product.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width:300, height:300, fontSize: 32, border: '5px solid light'}}
                    >

                        <h3>From: {product.price} UAH.</h3>
                        <Button variant={"outline-success"}>Add to Basket</Button>
                    </Card>
                </Col>
            </Row></Col>
            <Col><Row className="d-flex flex-column m-1">
                <h1>Characteristics</h1>
                {description.map((info, index ) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title} : {info.description}
                    </Row>
                )}
            </Row></Col>
        </Container>
    );
};

export default ProductPage;