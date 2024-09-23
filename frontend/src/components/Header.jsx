import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import logo from './assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';

function Header() {

    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [logoutApiCall] = useLogoutMutation();
  
    const logoutHandler = async () => {
      try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        // NOTE: here we need to reset cart state for when a user logs out so the next
        // user doesn't inherit the previous users cart and shipping
        dispatch(resetCart());
        navigate('/login');
      } catch (err) {
        console.error(err);
      }
    };

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
                                        <Nav.Link><FaShoppingCart/>Cart
                                            {
                                                cartItems.length > 0 && (

                                                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                                             {cartItems.reduce((a, c) => a + c.qty, 0)}
                                                    </Badge>

                                                )
                                            }
                                        
                                        </Nav.Link> 
                                    </LinkContainer>


                                    {userInfo ? (
                                                <>
                                                    <NavDropdown title={userInfo.name} id='username'>
                                                        <NavDropdown.Item as={Link} to='/profile'>
                                                            Profile
                                                        </NavDropdown.Item>
                                                            <NavDropdown.Item onClick={logoutHandler}>
                                                                Logout
                                                             </NavDropdown.Item>
                                                    </NavDropdown>
                                                </>
                                            ) : (
                                                <Nav.Link as={Link} to='/login'>
                                                    <FaUser /> Sign In
                                                </Nav.Link>
                                            )}
                                        
                                        
                                </Nav>
                        </Navbar.Collapse>
                </Container>

            </Navbar>
        </header>
  )
}

export default Header
