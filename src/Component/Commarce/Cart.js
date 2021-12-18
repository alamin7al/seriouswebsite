import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart } = props

    let totalQuantity = 0
    let total = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product?.price * product.quantity
        totalQuantity = totalQuantity + product.quantity
    }
    const shipping = total > 0 ? 15 : 0
    const tax = (total + shipping) * 0.10
    const grandtotal = total + shipping + tax
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> {totalQuantity}  </Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Card.Text>
                        total:   {total.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        shipping:  {shipping.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        tax:   {tax.toFixed(2)}
                    </Card.Text>
                    <Card.Text>
                        grandTotal:   {grandtotal.toFixed(2)}
                    </Card.Text>
                   
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default Cart;