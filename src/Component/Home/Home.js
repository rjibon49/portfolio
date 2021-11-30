import React from 'react';
import About from './HomeSeactions/About';
import Banner from './HomeSeactions/Banner';

const Home = () => {
    return (
        <>
        <div className="bg-dark">
            <div>
            <Banner />
            </div>
            <About />
        </div>
        
        </>
    );
};

export default Home;