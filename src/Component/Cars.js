import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from './Car';
import useAuth from './Login/useAuth';
// import Cetegorys from './Cetegorys';

const Cars = () => {
    const [cars, setCars] = useState([])
    const { loading } = useAuth()
    useEffect(() => {
        fetch('http://localhost:5000/carslist')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <div className='container my-5'>
                <div className='text-start'>
                    <h3 className='fs-1 text-muted'>Welcome back!
                    </h3>
                    <h4 className='fs-5'>Check out these recommendations based on cars you've viewed.</h4>
                </div>
                {!loading && <div className='row'>
                    {
                        cars.slice(0, 5).map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>)
                    }
                </div>}
                {loading && <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                </div>}
            </div>
            <Link className='' to='/allcar'>
                <button className='text-decoration-underline  btn btn-outline-dark w-75 h-100 my-3'>
                    <div className="text-center">
                        <div className='d-flex justify-content-between'>
                            <h5 className='text-center'>Explore Page</h5>
                            <h5 className='text-center'>More Car</h5>
                            <h5 className='text-center'>All Car</h5>
                        </div>
                    </div>
                </button>

            </Link>

        </div>
    );
};

export default Cars;



