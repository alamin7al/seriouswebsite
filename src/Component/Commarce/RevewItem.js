import React from 'react';
import { Card } from 'react-bootstrap';

const RevewItem = (props) => {
    const { name, seller, stock, price, img, key } = props.product

    const {handleRemove} = props
    return (
        <div>
            <div className='d-flex align-items-center justyfy-content-center'>

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
                        <button onClick={() => props.handleAddTOCart(props.product)} className='btn btn-outline-dark'>Order</button>
                        <button className='btn btn-outline-dark ms-2' onClick={() => handleRemove(key)}>Remove</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default RevewItem;