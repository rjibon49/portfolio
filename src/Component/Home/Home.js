import React from 'react';
import About from './HomeSeactions/About';
import Banner from './HomeSeactions/Banner';
import Contact from './HomeSeactions/Contact/Contact';
import Projects from './HomeSeactions/Projects/Projects';

const Home = () => {
    return (
        <>
        <div className="bg-dark">
            <div>
            <Banner />
            <hr style={{color:'white', width:'75%', margin:'100px auto 0 auto'}}/>
            </div>
            <About />
            <hr style={{color:'white', width:'75%', margin:'100px auto 0 auto'}}/>
            <Projects />
            <hr style={{color:'white', width:'75%', margin:'100px auto 0 auto'}}/>
            <Contact />
        </div>
        
        </>
    );
};

export default Home;