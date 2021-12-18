import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
    const { img, _id, name, price } = car
    return (
        <div className='col-md-4  h-100 d-flex justify-content-center align-items-center '>
            <Card className='mb-1' style={{ width: '18rem', height: '100' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <p className='text-start'>New</p>

                    <Link to={`details/${_id}`}>

                        <Card.Title className='text-capitalize'>{name.slice(0, 18)}</Card.Title>

                    </Link>
                    <Card.Text>

                    </Card.Text>
                    <Card.Text className='text-start fw-bold text-muted'>
                        MSRP:  ${price}
                    </Card.Text>
                    <Link to={`details/${_id}`}>

                        <button className='btn btn-outline-dark'>Details</button>

                    </Link>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Car;