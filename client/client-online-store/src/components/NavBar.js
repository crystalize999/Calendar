import React, {useContext} from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


const NavBar = observer( () => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>TechWorld</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)}>Admin page</Button>
                    <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)} className='ms-2'>Logout</Button>
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