import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observe} from "mobx";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>TechWorld</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"}>Admin page</Button>
                    <Button variant={"outline-light"} className='ms-2'>Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button style={{margin:'5px'}} variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;