import React from 'react';
import { Card } from 'react-bootstrap';
import useAuth from './Login/useAuth';

const User = ({users, user, setUsers }) => {
    const { loading } = useAuth()
    const { name, email, city, zip, _id, phone, productName, img } = user


    const handdleDelete = id => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('delet successfully')
                    const remaingUsers = users.filter(x => x._id !== id)
                    setUsers(remaingUsers)
                }
            })
    }



    return (
        <>
            <div className='col-md-5'>
                {!loading && <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                    <img className='w-100 w-100' src={img} alt="" />
                </div>}
            </div>
            <div className='col-md-5'>
                <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                    {!loading && <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title className='fs-4 text-muted'>Car Name {productName}</Card.Title>
                            <div className="text-start fs-5">
                                <p> <em>Your Name: </em> {name} </p>
                                <p> <em>Your Email:</em> {email} </p>
                                <p> <em>Your City:</em> {city}</p>
                                <p> <em>Your Zip Code:</em> {zip}</p>
                                <p> <em>Phone Number:</em> {phone}</p>
                            </div>
                        </Card.Body>
                    </Card>}
                </div>

            </div>
            <div className='col-md-2'>
                <div className='h-100 d-flex justify-content-center align-items-center'>
                    <button onClick={() => handdleDelete(_id)} className='btn btn-outline-dark'>Delete</button>

                </div>
            </div>

        </>
    );
};

export default User;