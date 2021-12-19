import React from 'react';
import home from '../img/home.jpg'
import './HomeCar.css'
import home2 from '../img/home2.jpg'
import home3 from '../img/home3.jpg'
import home4 from '../img/home4.jpg'
const HomeCar = () => {
    return (
        <div className='bg-dark h-100 w-100 my-5'>
            <div className="">
                
                <div className="row">
                <h4 className='text-white text-start mt-1'>Tata PUNCH Key Features</h4>

                    <div className="col-md-8 mt-5">
                        <img src={home} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-4 d-flex align-items-center justyfy-content-center">
                        <div>
                            <h2 className='text-white car'>BOLD SUV DESIGN </h2>
                            <h6 className='text-white car'>The world will take notice of two showstoppers. You and the Punch.</h6>
                            <p className='text-white car'>More About Style </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="  col-md-4 d-flex align-items-center justyfy-content-center">
                        <div>
                            <h2 className='text-white car'>VERSATILE & SPIRITED PERFORMANCE </h2>
                            <h6 className='text-white car'>The high performance of the PUNCH will be the second reason onlookers will turn green with envy. The first will be the smile on your face while you are behind the wheel.</h6>
                            <p className='text-white car'>More About Performance  </p>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5 ">
                        <div>
                            <img src={home3} className='img-fluid' alt="" />


                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-8 d-flex align-items-center justyfy-content-center">
                        <img src={home2} className='img-fluid' alt="" />

                    </div>



                    <div className="col-md-4 mt-5">
                        <div>
                            <h2 className='text-white car'>CLASS LEADING COMFORT & CONVENIENCE FEATURES </h2>
                            <h6 className='text-white car'>TSit back and relax. Cruise with your gang. Make room for more fun. Its your space to unwind.</h6>
                            <p className='text-white car'>More About Comfort  </p>
                        </div>

                    </div>
                </div>
                <div className="row">

                    <div className="col-md-4 d-flex align-items-center justyfy-content-center">
                        <div>
                            <h2 className='text-white text-first car'>ABSOLUTE SAFETY</h2>
                            <h6 className='text-white text-first car'>This is for the fun-lovers, the thrill-seekers, the daily commuters. But most of all, this is for the responsible ones. The PUNCH vibes with your need for safety.</h6>
                            <p className='text-white text-first car'>More About Safety  </p>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5">
                        <img src={home4} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCar;