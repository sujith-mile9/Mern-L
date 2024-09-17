import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import logo from './assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
        <header>
            <Navbar bg='dark' variant='dark' expandexpand='lg' collapseOnSelect>
                <Container>
                        <LinkContainer to='/'>
                    
                            <Navbar.Brand >
                            
                                <img src={logo} alt='ProShop' />
                                ProShop
                            </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                              <Nav className='ms-auto'>
                                    <LinkContainer to='/cart'> 
                                        <Nav.Link><FaShoppingCart/>Cart</Nav.Link> 
                                    </LinkContainer>
                                    <LinkContainer to='/login'> 
                                        <Nav.Link ><FaShoppingCart/>Login</Nav.Link> 
                                    </LinkContainer>
                                        
                                        
                                </Nav>
                        </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
  )
}

export default Header
