import React, { useEffect, useState } from 'react';
import All from './All';
import Cetegorys from './Cetegorys';

const Allcar = () => {
    const [allcar, setAllCar] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:5000/carslist')
            .then(res => res.json())
            .then(data => setAllCar(data))
    }, [])
    return (
        <div className='container'>
        
            <div className='row'>
                {
                    allcar.slice(5, 15).map(somecar => <All
                        somecar={somecar}
                    ></All>)
                }
            </div>
        </div>
    );
};

export default Allcar;