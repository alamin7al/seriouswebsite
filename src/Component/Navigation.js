import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Login/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div className=''>
            <Navbar bg="light" expand="lg">
             
                    <Navbar.Brand className='text-uppercase font-monospace text-muted p-1' href="#home">Car & E-Commarce Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className=' text-decoration-none ms-2' to='/home'>Home</Link>
                            <Link className=' text-decoration-none ms-2' to='/allcar'>All Car</Link>

                            <Link className=' text-decoration-none ms-2' to='/addCar'>AddCar</Link>
                            <Link className=' text-decoration-none ms-2' to='/single'>My Order</Link>
                            <Link className=' text-decoration-none ms-2' to='/profile'>Your Profile</Link>
                          
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-between">
                    <Link className='fs-5 text-decoration-none ' to='/revew'>Revew</Link>

                            <Link className=' me-5 text-decoration-none' to='/shop'>E-Shop</Link>
                            <Link className=' text-decoration-none ' to='/orderrevew'>E-Order</Link>

                        {
                            user?.email ? <Link to='/'>
                            <button className='btn btn-outline-dark btn-sm' onClick={logOut}>LogOut</button>
                            </Link> : <Link to='/login'>Login</Link>
                        }
                        <Navbar.Text className='text-uppercase font-monospace text-muted'>


                          {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
            
            </Navbar>
        </div>
    );
};

export default Navigation;