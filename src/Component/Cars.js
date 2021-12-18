import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from './Car';
// import Cetegorys from './Cetegorys';

const Cars = () => {
    const [cars,setCars]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/carslist')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
           <div className='container'>
              
               <div className='row'>
                   {
                       cars.slice(0,5).map(car=> <Car
                       key={car._id}
                       car={car}
                       ></Car> )
                   }
               </div>
           </div>
           <Link to='/allcar'>
           <button  className='btn btn-outline-dark'>Explore Page</button>

           </Link>

        </div>
    );
};

export default Cars;



