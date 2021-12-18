import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
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
                information.map(info => <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>{info.name}</Card.Title>
                        <Card.Text>
                            {info.email}
                        </Card.Text>
                        <Card.Text>
                            {info.address}
                        </Card.Text>
                        <Card.Text>
                            {info.country}
                        </Card.Text>
                        <Card.Text>
                            {info.zip}
                        </Card.Text>
                        <Card.Text>
                            {info.number}
                        </Card.Text>
                        <Card.Text>
                            {info.Relegon}
                        </Card.Text>
                        <button onClick={()=>handdleDelete(info._id)} className='btn btn-outline-dark '>Delete </button>
                    </Card.Body>
                </Card>)
            }
        </div>
    );
};

export default Information;