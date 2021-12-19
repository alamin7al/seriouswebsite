import React from 'react';
import Cars from './Cars';
import Headers from './Headers/Headers';
import HomeCar from './HomeCar';
import Revew from './Revew'
const Home = () => {
    return (
        <div>
          <Headers></Headers>
           <Cars></Cars>
           <HomeCar></HomeCar>
           <Revew></Revew>
        </div>
    );
};

export default Home;