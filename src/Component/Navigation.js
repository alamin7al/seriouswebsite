import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Login/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Car Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='fs-5 text-decoration-none ms-2' to='/home'>Home</Link>
                            <Link className='fs-5 text-decoration-none ms-2' to='/addCar'>AddCar</Link>
                            <Link className='fs-5 text-decoration-none ms-2' to='/single'>My Order</Link>
                            <Link className='fs-5 text-decoration-none ms-2' to='/profile'>Your Profile</Link>
                            <Link className='fs-5 text-decoration-none ms-2' to='/revew'>Revew</Link>
                            <Link className='fs-5 text-decoration-none ms-2' to='/shop'>Shop</Link>
                            <Link className='fs-5 text-decoration-none ms-2' to='/orderrevew'>orderrevew</Link>
                            {/* <Link className='fs-5 text-decoration-none ms-2' to='/dashbord'>dashbord</Link> */}
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            user?.email ? <Link to='/'>
                            <button className='btn btn-outline-dark btn-sm' onClick={logOut}>LogOut</button>
                            </Link> : <Link to='/login'>Login</Link>
                        }
                        <Navbar.Text>


                            Signed in as: {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;