import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = (props, handleAddTOCart) => {
    const { name, img, seller, price,category, stock } = props.product
    return (
        <>
            <div className='d-flex align-items-center justyfy-content-center shadow p-3 mb-5 bg-body rounded'>

                <div>
                    <img className='img-fluid ' src={img} alt="" />

                </div>
                <Card style={{ width: '18rem' }}>
                    <div>
                        <Card.Body className='d-flex align-items-center justyfy-content-center '>
                            <div >
                                <Card.Title>{name.slice(0, 26)}</Card.Title>

                              <div className='fs-5 text-start text-capitalize font-monospace fst-italic'>
                              <p>Seller: {seller}</p>
                                <p>category: {category}</p>
                                <p>Stock: {stock}</p>
                                <p>Price: ${price}</p>
                              </div>
                            </div>

                        </Card.Body>
                    </div>
                    <button onClick={() => props.handleAddTOCart(props.product)} className='btn btn-outline-dark'>Order</button>

                </Card>

            </div>

        </>
    );
};

export default Products;