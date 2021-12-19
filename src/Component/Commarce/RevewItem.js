import React from 'react';
import { Card } from 'react-bootstrap';

const RevewItem = (props) => {
    const { name, seller, stock, price, category, img, key } = props.product

    const { handleRemove } = props
    return (
        <div>

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
                    <button className='btn btn-outline-dark ms-2' onClick={() => handleRemove(key)}>Remove</button>

                </Card>

            </div>
            {/* <div className='d-flex align-items-center justyfy-content-center'>

                <div>
                    <img className='img-fluid ' src={img} alt="" />
                </div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{name.slice(0, 26)}</Card.Title>
                        <Card.Text>
                            {seller}
                        </Card.Text>
                        <Card.Text>
                            {stock}
                        </Card.Text>
                        <Card.Text>
                            {price}
                        </Card.Text>
                        <button className='btn btn-outline-dark ms-2' onClick={() => handleRemove(key)}>Remove</button>
                    </Card.Body>
                </Card>
            </div> */}
        </div>
    );
};

export default RevewItem;