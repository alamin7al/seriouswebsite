import React, { useEffect, useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './Login/useAuth';

const Information = () => {

    const { user, } = useAuth()
    const [information, setInformation] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/update?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [information])
    const handdleDelete = id => {
        const url = `http://localhost:5000/update/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('delet successfully')
                    const remaingUsers = information.filter(x => x._id !== id)
                    setInformation(remaingUsers)
                }
            })
    }

    return (

        <div>

            {
                information.map(info =>
                    <>
                        <Table striped bordered hover variant="dark">

                            <thead>
                                <tr className='fs-5 text-start fw-normal text-capitalize'>
                                    <th>Your Name</th>
                                    <th>Your Email </th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Countery</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  className=' text-start fw-normal text-capitalize'>
                                    <td>{info.name}</td>
                                    <td>{info.email}</td>
                                    <td>{info.address}</td>
                                    <td>{info.city}</td>
                                    <td>{info.countery}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table striped bordered hover variant="dark">
                            <thead >
                                <tr  className='fs-5 text-start fw-normal text-capitalize'>
                                    <th>Gender</th>
                                    <td>Date Of Birth</td>
                                    <td>Contact Number</td>
                                    <td>Home Telephone Number</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  className=' text-start fw-normal text-capitalize'>
                                    <td >{info.gender}</td>
                                    <td>{info.date}</td>
                                    <td> {info.number}</td>
                                    <td>  {info.telephone}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </>





                    //     <Card.Body>
                    //         <Card.Title>{info.name}</Card.Title>
                    //         <Card.Text>
                    //             {info.email}{info.address}{info.city}{info.countery}{info.date}{info.email}{info.gender}{info.name}{info.number}{info.telephone}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             {info.address}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             {info.country}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             {info.zip}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             {info.number}
                    //         </Card.Text>
                    //         <Card.Text>
                    //             {info.Relegon}
                    //         </Card.Text>
                    //         <button onClick={() => handdleDelete(info._id)} className='btn btn-outline-dark '>Delete </button>
                    //     </Card.Body>
                    // </Card>
                )
            }
        </div>
    );
};

export default Information;