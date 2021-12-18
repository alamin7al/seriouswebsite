import React from 'react';
import Allcar from './Allcar';
import Cars from './Cars';
// import Header from './Header';
import Navigation from './Navigation';
import Revew from './Revew'
const Home = () => {
    return (
        <div>
           {/* <Header></Header> */}
           <Cars></Cars>
           <Revew></Revew>
        </div>
    );
};

export default Home;