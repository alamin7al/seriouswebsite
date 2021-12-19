import React, { useEffect, useState } from 'react';
import All from './All';
import Cetegorys from './Cetegorys';
import more from '../img/more1.png'
import more2 from '../img/more2.png'
const Allcar = () => {
    const [allcar, setAllCar] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/carslist')
            .then(res => res.json())
            .then(data => setAllCar(data))
    }, [])
    return (
        <div className=''>
            <p className='fs-5 fst-normal text-capitalize text-nowrap bd-highlight font-monospace'>All Car Now Choaise and Details button click For ALL Data Show And Order</p>
            <hr />
            <div className='row'>
                {
                    allcar.slice(0, 15).map(somecar => <All
                        somecar={somecar}
                    ></All>)
                }
            </div>
            <div className='h-100'>
                <div className="row bg-dark" >
                <h4 className='text-white text-start p-2 ms-2 '>Key Features </h4>
                <hr className='text-white' />
                    <div className="col-md-6 d-flex align-items-center justyfy-content-center">
                        <div>
                        <h2 className='text-white car'>GOLD STANDARD OF TECHNOLOGY </h2>

                            <h6 className='text-white car'>
                                Experience the exhilarating performance of ALTROZ with powerful BS6 petrol and diesel engines, fine-tuned suspension and comprehensive control and to conquer every city road. Set ablaze every trail with an impressive new 1.2L i-Turbo engine, and give your drive the added boost you seek.

                            </h6>
                          
                        </div>

                    </div>
                    <div className="col-md-6 my-5">
                        <div className='d-flex align-items-center justyfy-content-center'>
                            <div>
                                <img className='w-100 h-100 mt-5 p-2' src={more} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row bg-dark" >
                    <div className="col-md-6 my-5">
                        <div className='d-flex align-items-center justyfy-content-center'>
                            <div>
                                <img className='w-100 h-100 mt-5 p-2' src={more2} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justyfy-content-center">
                        <div>
                            <h2 className='text-white car'>GOLD STANDARD OF CUSTOMER DELIGHT </h2>
                            <h6 className='text-white car'>
                            Step inside and be amazed by the modern, intelligent and tastefully crafted interiors. Experience every mile in the luxurious comfort of premium leatherette seats, rear AC vents, rear flat floor design, 90° opening doors and personalized wallpapers all that makes you wish your drive lasts longer.

                            </h6>
                         
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Allcar;