import React from 'react';
import { Card } from 'react-bootstrap';

const Products = (props ,handleAddTOCart) => {
    const { name, img, seller, price, stock } = props.product
    return (
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
                    <button onClick={()=>props.handleAddTOCart(props.product)} className='btn btn-outline-dark'>Order</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Products;